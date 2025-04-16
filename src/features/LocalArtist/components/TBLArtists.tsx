import { Table } from "flowbite-react";
import { useState } from "react";
import { Artist } from "../types/LocalArtist";
import BTNAccions from "./BTNAccions";
import ArtistInfo from "./Modals/ArtistInfo";
import EditArtist from "./Modals/EditArtist";
import DisableArtist from "./Modals/DisableArtist";
import MobilePopOverOptions from "../../../components/MobileComponents/MobilePopOverOptions";

const TBLArtists = ({ artist }: { artist: Artist }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleRowClick = () => {
    setPopoverVisible(true);
  };
  return (
    <>
      <Table.Row key={artist.ID} onClick={handleRowClick}>
        <Table.Cell>{artist.Name}</Table.Cell>
        <Table.Cell>
          <MobilePopOverOptions
            setopenTrigger={setPopoverVisible}
            setOpen1={setSee}
            setOpen2={setEdit}
            setOpen3={setDow}
            openTrigger={popoverVisible}
            text={artist.ArtisProfession}
          />
        </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <div className="line-clamp-2">{artist.MoreInfo}</div>
        </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <div>
            <a href={artist.FBLink}>FB</a> / <a href={artist.IGLink}>IG</a> /{" "}
            <a href={artist.LILink}>LI</a>
          </div>
        </Table.Cell>
        <Table.Cell>
          {artist.Actived ? "Activo" : "Inactivo"}{" "}
        </Table.Cell>
        <Table.Cell className="max-md:hidden">
          <BTNAccions
            setSee={setSee}
            setDow={setDow}
            setEdit={setEdit}
            status={artist.Actived}
          />
        </Table.Cell>
      </Table.Row>

      <ArtistInfo see={see} setSee={setSee} Artist={artist} />
      <EditArtist edit={edit} setEdit={setEdit} Artist={artist} />
      <DisableArtist dow={down} setDow={setDow} Artist={artist} />
    </>
  );
};

export default TBLArtists;
