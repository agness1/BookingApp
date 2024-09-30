import {FC} from "react";
import Rating from "@mui/material/Rating";
import { Review } from "@/types/review";

interface ReviewsProps {
    data: Review[] | null;
}

const Reviews: FC<ReviewsProps> = ({ data }) => {
    const reviewsList = () => {
        if (data) {
            const reviews = data.map((item: Review) => {
                return (
                    <div key={item.id} className="p-2 flex flex-col gap-4 border-2">
                        <p>{item.user.name}</p>
                        <Rating
                            name="read-only"
                            value={parseFloat(item.rate)} 
                            readOnly
                        />
                        <p className="font-medium">{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                );
            });
            return reviews;
        } else {
            return <p>No reviews available.</p>;
        }
    };

    return (
        <div>
            <div>{reviewsList()}</div>
        </div>
    );
};

export default Reviews;