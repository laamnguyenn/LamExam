import Student from "./Student";
const students = [
    {
        id: "1",
        name: "Lina Ligero",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/11/11d0a3dc44855369561d66d733742b09364f8744_full.jpg",
        email: "lina.ligerr@gmail.com"
    },
    {
        id: "2",
        name: "Donal Heliton",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5a/5ace4f90e58c4ed0ff5dc84a19bed6e91bd8ee63_full.jpg",
        email: "donaldheli2333@gmail.com"
    },
    {
        id: "3",
        name: "Mary Emmanuel",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00a507a32339fcc45426e1d3921cb40d4e85dd0e_full.jpg",
        email: "maryeman290@hotmail.com"
    },
    {
        id: "4",
        name: "Tom Clancy",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5e/5e3b1b6630cbf92c1a73dc7098522fd484ec8cd6_full.jpg",
        email: "tommmcla999@gmail.com"
    }
]

export default function StudentList(){
    return (
        <div className="App">
            {students.map((students) =>(
                <Student id={students.id} name = {students.name} image={students.image} email={students.email} />
            ))}
        </div>
    );
}