import { Table } from "flowbite-react";
import { useState } from "react";
import { Artist } from "../types/LocalArtist";
import BTNAccions from "./Modals/BTNAccions";
import ArtistInfo from "./Modals/ArtistInfo";
import EditArtist from "./Modals/EditArtist";
import DisableArtist from "./Modals/DisableArtist";

const TBLArtists = ({ artist }: { artist: Artist }) => {
  const [see, setSee] = useState<boolean>(false);
  const [down, setDow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <>
      <Table.Row className=" h-20" key={artist.ID}>
        <Table.Cell className="w-56">
          {artist.Name}
        </Table.Cell>
        <Table.Cell className="w-56">{artist.ArtisProfession} </Table.Cell>
        <Table.Cell className="w-56">
          <div className="line-clamp-2">
          {artist.MoreInfo}
          </div>
           </Table.Cell>
        <Table.Cell className="w-56">
          <div>
          <a href= {artist.FBLink}>FB</a>
          <a href={artist.IGLink}>IG</a>
          <a href={artist.LILink}>LI</a>
          </div>
        </Table.Cell>
        <Table.Cell className="w-56">{artist.Actived? "Activo": "Inactivo"} </Table.Cell>
        <Table.Cell className="w-52">
          <BTNAccions setSee={setSee} setDow={setDow} setEdit={setEdit} />
        </Table.Cell>
      </Table.Row>
       <ArtistInfo see={see} setSee={setSee} Artist={artist} />
       <EditArtist edit={edit} setEdit={setEdit} Artist={artist} />
      <DisableArtist dow={down} setDow={setDow} Artist={artist}/>
    </>
  );
};

export default TBLArtists;
