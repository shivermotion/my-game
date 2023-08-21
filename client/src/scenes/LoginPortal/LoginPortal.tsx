import React from 'react';
import logo from "../../assets/images/discord-logo-pixel-black.jpg"
import backgroundImage from "../../assets/images/sonic-clean-background.jpg"
import { Button } from '../../components/ui/common/Button';


 export const LoginPortal = () => {
  // Replace these values with your Discord application's details
  const clientId = process.env.REACT_APP_DISCORD_CLIENT_ID!;
  const redirectUri = encodeURIComponent('http://localhost:3000/auth/discord/callback');
  const scopes = encodeURIComponent('identify email');

  // Construct the Discord OAuth URL
  const discordLoginUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;

  console.log("rawr",discordLoginUrl);


  return (
    <div style={{backgroundImage: `url('${backgroundImage}')`,}} className="bg-cover bg-center min-h-screen flex flex-col">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">GACHAWORLD</h1>
          <a href="/merch-shop" ><Button text='MERCH SHOP'/></a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Login Section */}
          <div className="col-span-1 bg-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">LOGIN</h2>
            <img src={logo} alt="Login" className="w-full" />
            <a href={discordLoginUrl} className="w-full bg-black text-white p-2 rounded-md  text-center block">
            <Button text='LOGIN WITH DISCORD'/>
            </a>
          </div>

          {/* News Section */}
          <div className="col-span-1 bg-black p-8 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold mb-4 text-white">NEWS</h2>
            <p className="text-gray-700 text-white">Latest updates and news about GachaWorld.</p>
            {/* Add news items here */}
          </div>

          {/* Art Section */}
          <div className="col-span-1 bg-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">ART</h2>
            <div className="grid grid-cols-2 gap-4">
              <img src="art1.jpg" alt="Art 1" className="rounded-md text-white" />
              <img src="art2.jpg" alt="Art 2" className="rounded-md text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


