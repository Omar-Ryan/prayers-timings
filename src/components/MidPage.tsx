import Prayer from "./Prayer";
import imageA from "../assets/prayer-1.png";
import imageB from "../assets/prayer-2.png";
import imageC from "../assets/prayer-3.png";
import imageD from "../assets/prayer-4.png";
import imageE from "../assets/prayer-5.png";
import Stack from "@mui/material/Stack";

// interface PropsApj extends Props{
interface PropsApj{
  id: number;
  name: string;
  image : string;
  time:string;
}
interface Props {
  timings:{
    Fajr : string ;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  } ;
}

const MidPage = ({timings} : Props) => {
  const prayerNames: PropsApj []= [
    { id: 1, name: "الفجر" , image:imageA , time:timings.Fajr},
    { id: 2, name: "الظهر" , image: imageB , time:timings.Dhuhr},
    { id: 3, name: "العصر" , image: imageC , time:timings.Asr},
    { id: 4, name: "المغرب" , image: imageD, time:timings.Maghrib },
    { id: 5, name: "العشاء" , image: imageE , time:timings.Isha},
  ];
  console.log(timings)
  return (
    <Stack direction="row" justifyContent="space-around" gap="5px" margin="20px 0px 40px" flexWrap="wrap">
      {prayerNames.map((ele) => {
        return <Prayer  name={ele.name} key={ele.id} img={ele.image} time={ele.time}/>;
      })}
    </Stack>
  );
};

export default MidPage;
