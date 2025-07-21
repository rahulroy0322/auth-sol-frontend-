import type { UserType } from "@/@types/user.type";
import { UsersUi } from "@/components/app/dashboard/project/users";
import type { FC } from "react";
// import { useParams } from "react-router-dom";

const users: UserType[] = [
  {
    _id: "c6758931-69b9-43d7-ba99-470ddcae05bc",
    uname: "nwiskar0",
    email: "yclayal0@google.it",
    password: "$2a$04$rjM8DReuwyvjsX7fz554Au/WegycOv.FEHcvr4HCcGYhu2VSiytFK",
    role: "user",
    "2fa": { enabled: true },
  },
  {
    _id: "bc7badcc-08f8-44d9-abb1-2d1c3d957c34",
    uname: "gedwinson1",
    email: "vsadry1@salon.com",
    password: "$2a$04$AmbCRHrJbCPvUFpEByoN2.dApedx2c4KiZTwKPaUhti28g80xl3Ea",
    role: "editor",
    "2fa": { enabled: true },
  },
  {
    _id: "a0596390-3943-4e60-a2e8-7279799c89c5",
    uname: "bblackaller2",
    email: "ahowsley2@de.vu",
    password: "$2a$04$AHz5xFrOfnAlMncfAEzsTub4dDFXF7KiD3imLAw494lIiKooTddbC",
    role: "geast",
    "2fa": { enabled: false },
  },
  {
    _id: "183f266f-8813-440e-aff3-caf6c103ec57",
    uname: "owiper3",
    email: "gseadon3@java.com",
    password: "$2a$04$Evrm/f6u6.U3seoZAXMNI.Mj8fVPeXtRG3X6CpAe9Xn5jmYSFAsb.",
    role: "admin",
    "2fa": { enabled: false },
  },
  {
    _id: "43b616cb-3694-4bb2-9456-802853f9f0e3",
    uname: "ebrinicombe4",
    email: "plambarth4@sun.com",
    password: "$2a$04$JdpaOUqCRxhuvNQlyLHG2uWmu8rq5Qr9RvZqpCVHn9zixIHFHy.Ta",
    role: "editor",
    "2fa": { enabled: true },
  },
  {
    _id: "21147128-e804-4ec4-ae98-6e85abe6e7d1",
    uname: "ddadge5",
    email: "cparmby5@tripadvisor.com",
    password: "$2a$04$lkeMmSGZ8g.MPPaFmhw9YuCXcwBNk5xyVcRxH9xz8Zno7i02hkfSK",
    role: "user",
    "2fa": { enabled: false },
  },
  {
    _id: "20023702-15be-40b1-9153-dea67d6f7791",
    uname: "kolden6",
    email: "dtomaszczyk6@sogou.com",
    password: "$2a$04$iewrRE97GmhNVmyVXg0ZVOiqhEC8PFSWYvAVRKR3oKou9lr9xhb7.",
    role: "admin",
    "2fa": { enabled: true },
  },
  {
    _id: "d4a3830e-1385-49b7-99f3-7123d5fe10e7",
    uname: "fgravatt7",
    email: "nallman7@alexa.com",
    password: "$2a$04$rlqOIhtjXyEvwmU0aVBexepCAkkq6UGSCLgMcjBbH0D6PvaBIqrWO",
    role: "editor",
    "2fa": { enabled: true },
  },
  {
    _id: "16d66f6c-e898-413e-bbb7-e01c792baa04",
    uname: "cjamison8",
    email: "mmullarkey8@latimes.com",
    password: "$2a$04$ytQPvsvTtnCHxu/Wyk8Dde6wkvWqPm6y.kBuFteWnKrMQAWwU87hS",
    role: "editor",
    "2fa": { enabled: true },
  },
  {
    _id: "fe996101-a13e-4e39-b3a5-1eb7baecd9f4",
    uname: "staunton9",
    email: "gchalk9@marketwatch.com",
    password: "$2a$04$pTxSbmanq5kGRGjJ.Zmq4Ox7vPb2c5wdGPGTrcXopQ3mczZdOp7Ha",
    role: "admin",
    "2fa": { enabled: true },
  },
  {
    _id: "448bdc64-cbc5-4c6d-bc37-cac6e9fd39c3",
    uname: "rfrossella",
    email: "rwyralla@blogger.com",
    password: "$2a$04$OGtg.bNutyA.TDLbKEJYBuQYbabdU574yfl.IMUZOd93Bk2.OYxFy",
    role: "admin",
    "2fa": { enabled: true },
  },
  {
    _id: "3e6fe6df-55e8-4a63-b869-798d1fc97fac",
    uname: "smazeyb",
    email: "kbaldinottib@de.vu",
    password: "$2a$04$oeJMx/Q6F79ksJ5Ue2HW.Oxd.Yj.BVe/2gpZh7zCnRJoLJfr72nf.",
    role: "editor",
    "2fa": { enabled: false },
  },
];

const ProjectUsersPage: FC = () => {
//   const { id } = useParams() as {
//     id: string;
//   };

  return <UsersUi users={users} />;
};

export default ProjectUsersPage;
