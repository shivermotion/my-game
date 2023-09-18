import React,{ useState} from 'react';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import avatar from "../../../assets/images/avatar.png";





export const ProfileContainer = () => {
  const [description, setDescription] = useState('Default description here.');

  const [user] = useState({
    userName: 'testUser',
    rank: 'testRank',
    country: 'testCountry',
    gachaponCollection: [1,2,3,4,5,6,7,8,9,10]
  });


  
  const descriptionOptions = [  
    "I'm full of surprises, just like a Gacha!",
  "I'm like a Gachapon, ready to spread joy!",
  "Packed with potential, I'm your personal Gachapon!",
  "Pop goes my excitement, just like a Gacha capsule!",
  "Every day's a new adventure, just like opening a Gacha!",
  "I hold treasures within, just like a Gacha capsule!",
  "Who knows what I'll do next? I'm like a Gacha surprise!",
  "Can't stop the pop! I'm always excited, like a Gacha fan!",
  "Like Gachapon, I spread little joys!",
  "Twist, pop, thrill - I live life the Gacha way!"
]; 

  const handleDescriptionChange = (e : any) => {
    setDescription(e.target.value);
  };


  

  return (
    <div className="flex flex-col h-screen justify-center items-center shadow-lg p-4 rounded-3xl bg-[#FED7AA] m-8 border-2 border-orange-600">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 border-2 border-orange-600 bg-[#FED7AA]">
        <div className="w-2/3">
          <ProfileCard 
          description={description} 
          rank={user.rank} 
          userName={user.userName} 
          country={user.country} 
          gachaponCollection={user.gachaponCollection.length} />
          <div className="mt-4">
            <label htmlFor="description" className="text-sm font-bold">Change Description:</label>
            <select
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full border rounded p-2 mt-1"
            >
              {descriptionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button className="w-full bg-[#C084FC] text-white p-2 rounded-xl hover:bg-[#581C87] hover:text-white text-[#4C1D95] border-2 border-[#4C1D95]">
              Change Profile Card
            </button>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center border-l border-gray-200 pl-6">
          <img
            src={avatar} // Replace with the actual avatar URL
            alt="Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
          <button className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600">
           Edit Avatar
          </button>
          <button className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600">
            Show Friend Code
          </button>
          <button className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600">
            Share Profile
          </button>
        </div>
      </div>
    </div>
  );
};

