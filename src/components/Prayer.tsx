import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  img: string;
  time : string;
};

const Prayer: React.FC<Props> = ({ name, img , time}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={img} title="images" />
      <CardContent>
        <Typography variant="h4" component="div">
          صلاة {name}
        </Typography>
        <Typography variant="h1" color="text.secondary">
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Prayer;
