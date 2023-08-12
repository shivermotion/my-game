import React from 'react';
import logo from "../../assets/images/discord-logo-pixel.webp"

 export const LoginPortal = () => {
  // Replace these values with your Discord application's details
  const clientId = process.env.REACT_APP_DISCORD_CLIENT_ID!;
  const redirectUri = encodeURIComponent('http://localhost:3000/auth/discord/callback');
  const scopes = encodeURIComponent('identify email');

  // Construct the Discord OAuth URL
  const discordLoginUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;

  console.log("rawr",discordLoginUrl);


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">GachaWorld</h1>
          <a href="/merch-shop" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Merch Shop</a>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-8">
          {/* Login Section */}
          <div className="col-span-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <img src={logo} alt="Login" className="w-full" />
            <a href={discordLoginUrl} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-center block">
              Login with Discord
            </a>
          </div>

          {/* News Section */}
          <div className="col-span-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">News</h2>
            <p className="text-gray-700">Latest updates and news about GachaWorld.</p>
            {/* Add news items here */}
          </div>

          {/* Art Section */}
          <div className="col-span-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Art</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Add art images here */}
              <img src="art1.jpg" alt="Art 1" className="rounded-md" />
              <img src="art2.jpg" alt="Art 2" className="rounded-md" />
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


