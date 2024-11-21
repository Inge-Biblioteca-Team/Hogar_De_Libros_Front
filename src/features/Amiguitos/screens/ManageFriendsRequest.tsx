import { Label, Select, TextInput } from "flowbite-react";
import { FirendCrumbs } from "../../../components/Breadcrumbs/BreadCrumbsItems";
import { useState } from "react";
import { useQuery } from "react-query";
import UseDebounce from "../../../hooks/UseDebounce";
import { GetFriends } from "../services/SvFriends";
import { FriendResponse } from "../types/FriendType";
import FriendsTableBody from "../components/FriendsTableBody";
import CustomPagination from "../../../components/CustomPagination";
import FriendsRowsRequest from "../components/FriendsRowsRequest";
import OPTCategories from "../components/OPTCategories";
import OPTSubCategories from "../components/OPTSubCategories";
import NoResults from "../../../components/NoResults";
import { Pagination } from "flowbite-react";

const ManageFriendsRequest = () => {
  const [Page, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem("FLRPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const [Limit, setCurrentLimit] = useState<number>(5);

  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  const exp = UseDebounce(experience, 1000);

  const { data: FriendList } = useQuery<FriendResponse, Error>(
    ["FriendReqList", Page, Limit, category, subCategory, exp],
    () => GetFriends(Page, Limit, category, subCategory, exp, "Pendiente"),
    {
      staleTime: 600,
    }
  );
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem("FLRPage", page.toString());
  };

  const MaxPage = Math.ceil((FriendList?.count ?? 0) / 5);

  return (
    <>
      <FirendCrumbs text="Solicitudes pendientes de respuesta" />
      <main className=" flex flex-col items-center justify-center w-full gap-5">
        <section className=" max-sm:w-full max-sm:p-2 flex max-sm:flex-col w-4/5 gap-2">
          <div>
            <Label value="Categoría principal" />
            <Select onChange={(event) => setCategory(event.target.value)}>
              <OPTCategories />
            </Select>
          </div>
          <div>
            <Label value="Sub categoría" />
            <Select onChange={(event) => setSubCategory(event.target.value)}>
              <OPTSubCategories />
            </Select>
          </div>
          <div>
            <Label value="Experiencia del amigo" />
            <TextInput
              placeholder="Experiencia"
              onChange={(event) => setExperience(event.target.value)}
            />
          </div>
        </section>
        <section className="max-sm:w-full max-sm:p-2 w-4/5">
          {FriendList && FriendList.count > 0 ? (
            <>
              <FriendsTableBody hidd>
                {FriendList?.data.map((friend) => (
                  <FriendsRowsRequest
                    friend={friend}
                    key={"FriR" + friend.FriendId}
                  />
                ))}
              </FriendsTableBody>
              <div className="block max-sm:hidden">
              <CustomPagination
                page={Page}
                onPageChange={onPageChange}
                totalPages={MaxPage}
                setCurrentLimit={setCurrentLimit}
                total={FriendList?.count || 0}
              />
              </div>

              <div className="sm:hidden  flex justify-center ">
                <Pagination
                  layout="navigation"
                  currentPage={Page}
                  totalPages={MaxPage}
                  onPageChange={onPageChange}
                />
              </div>
            </>
          ) : (
            <NoResults />
          )}
        </section>
      </main>
    </>
  );
};

export default ManageFriendsRequest;
