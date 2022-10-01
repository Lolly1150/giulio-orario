<script lang="ts">
  import { getHours } from "../orario";
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
    let dayNumber = new Date().getDay();
    let r = getHours(dayNumber);
    let g = r;

    function onArrowLeft() {
        if(dayNumber < 0) return dayNumber = 7;
        if(dayNumber === undefined) return dayNumber = 7;
        if(dayNumber == 0) {
            dayNumber = 6;
            return r = getHours(dayNumber)
            //console.log("[D]" + dayNumber)
        };
        if(dayNumber == 1) {
            dayNumber = 0
            return r = getHours(dayNumber)
            //return console.log("[D]" + dayNumber)
        };
        dayNumber = dayNumber - 1;
        r = getHours(dayNumber)
        console.log(r)
    }
    function onArrowRigth() {
        if(dayNumber > 5) {
            dayNumber = 0;
            return r = getHours(dayNumber)
        }
        if(dayNumber === undefined) {
            dayNumber = 0;
            return r = getHours(dayNumber)

        }
        dayNumber = dayNumber + 1;
        r = getHours(dayNumber)
        console.log(r)
    }
    
</script>
<main >
    <h1>{convert(dayNumber)}</h1>
    <table class="table">
        <tr>
            <td>Hour</td>
            <td>Subject</td>
            <td>Prof.</td>
        </tr>
        <tr>
            <td>1ᵃ</td>
            <td>{r[1].subject}</td>
            <td>{r[1].prof}</td>
        </tr>
        <tr>
            <td>2ᵃ</td>
            <td>{r[2].subject}</td>
            <td>{r[2].prof}</td>
        </tr>
        <tr>
            <td>3ᵃ</td>
            <td>{r[3].subject}</td>
            <td>{r[3].prof}</td>
        </tr>
        <tr>
            <td>4ᵃ</td>
            <td>{r[4].subject}</td>
            <td>{r[4].prof}</td>
        </tr>
        <tr>
            <td>5ᵃ</td>
            <td>{r[5].subject}</td>
            <td>{r[5].prof}</td>
        </tr>
        <tr>
            <td>6ᵃ</td>
            <td>{r[6].subject}</td>
            <td>{r[6].prof}</td>
        </tr>



      </table>
      <button class="arrow-left" on:click={onArrowLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left left-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path>
         </svg>
        </button>
      <button class="arrow-right" on:click={onArrowRigth}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-right rigth-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path>
         </svg>
      </button>
</main>