import { lazyWithRetry } from "../utils/lazyWithRetry";

export const BooksMiddleScreen = lazyWithRetry(() => import("../features/Books/Screens/BooksMiddleScreen"));
export const Colecction = lazyWithRetry(() => import("../features/Books/Screens/Colecction"));
export const AdvanceSearchColection = lazyWithRetry(() => import("../features/Books/Screens/AdvanceSearchColection"));
export const ChildrenColection = lazyWithRetry(() => import("../features/ChildrenBooks/Screens/ChildrenColection"));
export const CompletCatalog = lazyWithRetry(() => import("../features/Books/Screens/CompletCatalog"));
export const EventsSchedule = lazyWithRetry(() => import("../features/EventsSection/Pages/EventsSchedule"));
export const CoruseSchedule = lazyWithRetry(() => import("../features/Courses/Pages/CoruseSchedule"));
export const AvailableComputers = lazyWithRetry(() => import("../features/Computers/screens/AvailableComputers"));
export const RoomsScheduleManage = lazyWithRetry(() => import("../features/Loan/Pages/Rooms/RoomsScheduleManage"));
export const ProgramActivities = lazyWithRetry(() => import("../features/Programs/screens/ProgramActivities"));
export const FriendInformation = lazyWithRetry(() => import("../features/Amiguitos/screens/FriendInformation"));
