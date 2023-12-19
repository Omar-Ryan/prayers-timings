import Grid from "@mui/material/Unstable_Grid2";

interface Props{
    displayName : string;
}

function TopPage({displayName}:Props) {
  return (
    <Grid container>
      <Grid xs={6}>
        <div>
          <h4>ديسمبر 2023 12| 10:32</h4>
          <h2> {displayName}</h2>
        </div>
      </Grid>
      <Grid xs={6}>
        <div>
          <h4>متبقي حتي صلاة الظهر</h4>
          <h2> 01:20:48</h2>
        </div>
      </Grid>
    </Grid>
  );
}

export default TopPage;
