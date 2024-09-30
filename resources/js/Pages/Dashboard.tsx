import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import useFetchData from "@/hooks/useFetchData";
import UsePostData from "@/hooks/usePostData";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import axios from "axios";

export default function Dashboard({ auth }: PageProps) {

    const userId = auth.user.id;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [hotelId, setHotelId] = useState();
    const [rate, setRate] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const titleHandler = (e: any) => {
        setTitle(e.target.value);
    };

    const descriptionHandler = (e: any) => {
        setDescription(e.target.value);
    };

    const labels: { [index: string]: string } = {
        0.5: "Useless",
        1: "Useless+",
        1.5: "Poor",
        2: "Poor+",
        2.5: "Ok",
        3: "Ok+",
        3.5: "Good",
        4: "Good+",
        4.5: "Excellent",
        5: "Excellent+",
    };

    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }

    const { data, error, postData }:any = UsePostData(
        "http://127.0.0.1:8000/createReview"
    );

    const submit = async (e: any) => {
        e.preventDefault();
        const formData = { userId, hotelId, rate, title, description };
        await postData(formData)
    };

    if (data) {
        window.location.reload()
    }

    const errorDescription = error?.response.data.errors.description
    const errorTitle = error?.response.data.errors.title


    const getuserReservations = useFetchData("http://127.0.0.1:8000/reservations");
    const getUserReviews = useFetchData("http://127.0.0.1:8000/reviews/user");

    const userReservations = getuserReservations.data;
    const userReviews = getUserReviews.data;

    const deleteHandler = async (id: any) => {
        axios.delete(`http://127.0.0.1:8000/reviews/delete/${id}`).then(async (response) => {
            console.log(response);
        }).then(() => {window.location.reload()});
    };

    const userReview = () => {
        if (userReviews) {
            return userReviews.map((item: any) => (
                <div
                    key={item.id}
                    className="flex lg:flex-row flex-col gap-4 w-11/12 lg:h-60 items-center px-10 py-4 lg:py-0 justify-around bg-white font-medium text-lg my-4 rounded-xl border-2 border-gray-200 shadow-sm">
                    <p className="lg:w-1/4 font-medium">{item.title}</p>
                    <p className="lg:w-1/4 font-light">{item.hotel}</p>
                    <p className="lg:w-1/4 text-sm text-center">{item.description}</p>
                    <p className="lg:w-1/12 text-center">{item.rate}</p>
                    <button
                        onClick={() => deleteHandler(item.id)}
                        className="bg-sky-700 text-white hover:bg-red-700 transition-all px-10 py-4 rounded-md"
                    >
                        Delete
                    </button>
                </div>
            ));
        } else return <CircularProgress />;
    };

    const handleSetHotelId = (id: any) => {
        setHotelId(id);
    };

    const reservationList = () => {
        if (userReservations) {
            return Object.values(userReservations).flatMap((reservation) =>
                reservation.map((item: any) => (
                    <div key={item.id} className="flex lg:flex-row flex-col gap-8 lg:gap-4 w-11/12 lg:h-60 items-center px-10 py-4 lg:py-0 justify-around bg-white font-medium text-lg my-4 rounded-xl border-2 border-gray-200 shadow-sm">
                        <div>
                            <div className="flex gap-2 font-bold">
                                <p>{item.start_date}</p>
                                <p>-</p>
                                <p>{item.end_date}</p>
                            </div>
                            <div className="font-light">{item.rooms.hotel.name}</div>
                        </div>
                        <img className="lg:w-1/4  rounded-md" src={item.rooms.hotel.image_url} alt="Hotel" />
                        <button
                            className="bg-sky-700 text-white hover:bg-sky-600 transition-all px-8 py-4 rounded-md"
                            onClick={() => {
                                handleSetHotelId(item.rooms.hotel.id);
                                handleOpen();
                            }}
                        >
                            Add review
                        </button>
                    </div>
                ))
            );
        }
        return <CircularProgress />;
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <p className="lg:px-12 py-8 text-3xl text-center lg:text-left font-bold ">Reservations</p>
                        <div className="flex flex-col items-center gap-2">{reservationList()}</div>
                        <Modal open={open} onClose={handleClose} className="flex items-center justify-center ">
                            <form
                                className="flex items-center flex-col justify-center gap-4 bg-white lg:w-1/2 w-11/12 h-3/4 rounded-md"
                                onSubmit={submit}
                            >
                                <p className="text-xl text-slate-700">Rate</p>
                                <Rating
                                    name="hover-feedback"
                                    value={rate}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => setRate(newValue)}
                                    onChangeActive={(event, newHover) => setHover(newHover)}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <label className="text-left lg:w-1/2 w-11/12 text-xl text-slate-700">Title</label>
                                <input type="text" className="lg:w-1/2 w-11/12 rounded-md border-gray-300" onChange={titleHandler} />
                                {errorTitle}
                                <label className="lg:w-1/2 w-11/12 text-xl text-slate-700">Description</label>
                                <textarea className="lg:w-1/2 w-11/12 rounded-md border-gray-300" onChange={descriptionHandler} />
                                {errorDescription}
                                <input type="submit" className="lg:w-1/2 w-11/12 bg-sky-700 text-white hover:bg-sky-600 cursor-pointer transition-all h-10 rounded-md mt-4"/>
                            </form>
                        </Modal>
                        <p className="lg:px-12 py-8 text-3xl text-center lg:text-left font-bold ">Reviews</p>
                        <div className="flex flex-col items-center gap-2 mb-8 ">{userReview()}</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

