import { lazy } from "react";

export const BooksMiddleScreen = lazy(() => import("../features/Books/Screens/BooksMiddleScreen"));
export const Colecction = lazy(() => import("../features/Books/Screens/Colecction"));
export const AdvanceSearchColection = lazy(() => import("../features/Books/Screens/AdvanceSearchColection"));
export const ChildrenColection = lazy(() => import("../features/ChildrenBooks/Screens/ChildrenColection"));
export const CompletCatalog = lazy(() => import("../features/Books/Screens/CompletCatalog"));
export const EventsSchedule = lazy(() => import("../features/EventsSection/Pages/EventsSchedule"));
export const CoruseSchedule = lazy(() => import("../features/Courses/Pages/CoruseSchedule"));
export const AvailableComputers = lazy(() => import("../features/Computers/screens/AvailableComputers"));
export const RoomsScheduleManage = lazy(() => import("../features/Loan/Pages/Rooms/RoomsScheduleManage"));
export const ProgramActivities = lazy(() => import("../features/Programs/screens/ProgramActivities"));
export const FriendInformation = lazy(() => import("../features/Amiguitos/screens/FriendInformation"));
