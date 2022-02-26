import './App.css';
import Membercard from './component/membercard';

function App() {
  const informember = [
    {
      firstname:"Noppawat",
      lastname:"Khamyot",
      id:62010243,
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
      image:"https://cdn.discordapp.com/attachments/933239020677386280/936255047170400336/S__1917002_1.jpg"
    },
    {
      firstname:"Nattapat",
      lastname:"Arunkitjaroen",
      id:62010282,
      description:"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt",
      image:"https://media.discordapp.net/attachments/936250850387566614/936251628334481468/S__19677187.jpg?width=503&height=671"
    },
    {
      firstname:"Nichakan",
      lastname:"Sukhumjitpitayotai",
      id:62010299,
      description:"คนสวยที่สุดในกลุ่ม ช้างแต่งหน้า",
      image:"https://cdn.discordapp.com/attachments/933239020677386280/936255283469123604/IMG_20200711_115139_419.jpg"
    },
    {
      firstname:"Tan",
      lastname:" Chaiwongsriaroon",
      id:62010309,
      description:"Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
      image:"https://cdn.discordapp.com/attachments/933239020677386280/936255550503653426/unknown.png"
    },
    {
      firstname:"Thanaphol",
      lastname:"Sukhumjitpitayotai",
      id:62010355,
      description:"Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.",
      image:"https://cdn.discordapp.com/attachments/933239020677386280/936249831494656071/B516432F-FCC2-41F4-B7B5-047A0C83872F.jpg"
    },
  ];
  return (
    <div className="App">
      <div className="App-container">
      <div className="title">
        <h1>Group's Members</h1>
      </div>
      {informember.map(member => (
        <Membercard
          key={member.id}
          id={member.id}
          firstname={member.firstname}
          lastname={member.lastname}
          des={member.description}
          image={member.image}
        />
      ))}
       </div>
    </div>
  );
}

export default App;
