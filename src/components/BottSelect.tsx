import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";


interface Props {
  setCity: React.Dispatch<
    React.SetStateAction<{
      displayName: string;
      apiName: string;
    }>
  >;
}

const BottSelect = ({setCity }: Props) => {

  const availableCities = [
    {
      displayName: "القاهرة",
      apiName: "Cairo",
    },
    {
      displayName: "الاسكندرية",
      apiName: "Alex",
    },
    {
      displayName: "اسوان",
      apiName: "Aswan",
    },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    const cityObject = availableCities.find((city)=>( city.apiName === event.target.value))
    setCity(cityObject as {
      displayName: string;
      apiName: string;
    });
    // console.log(cityObject); // Test
  };



  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{ width: "40%", borderColor: "whitesmoke" }}>
        <Select
          onChange={handleChange}
          style={{ color: "whitesmoke" }}
          className="box-select"
        >
          {availableCities.map((city , i) => (
            <MenuItem value={city.apiName} key={i}>{city.displayName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BottSelect;
