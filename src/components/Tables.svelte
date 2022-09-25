<script lang="ts">
  import ArrowLeft from "./Arrow-Left.svelte";
  import ArrowRigth from "./Arrow-Rigth.svelte";

    let convert = (day: number) => {
        switch (day) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            case 0:
                return "Sunday";
        }
    }
    let day: "Monday" | "Tuesday" | "Wednesday" |  "Thursday" | "Friday" | "Saturday" | "Sunday" = convert(new Date().getDay());
</script>
<main>
    <h1>Orario: {day}</h1>
    <table class="table">
        <tr class="">
          <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> 
      <ArrowLeft/>
      <ArrowRigth/>
</main>