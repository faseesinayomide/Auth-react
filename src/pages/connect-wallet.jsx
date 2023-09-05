import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ConnectWallet = () => {
  return (
    <>
      <div className="text-center py-14 px-10">
        <img
          className="w-[60%] sm:w-[45%] md:w-[30%] lg:w-[30%] mx-auto  rounded-lg"
          src="src/assets/wallets/images/photo_2021-07-13-16.27.25-removebg-preview.png"
          alt=""
        />
        <h1 className="text-slate-50 text-6xl mb-8 font-semibold">
          How it works?
        </h1>

        <p className="text-slate-300 w-full sm:w-full md:w-[50%] lg:w-[50%] mx-auto text-[15px] leading-loose">
          {" "}
          Multiple iOS and Android wallets support the WalletConnect protocol.
          Interaction between mobile apps and mobile browsers are supported via
          mobile deep linking.
        </p>
      </div>

      <div className="grid grid-cols-3  sm:grid-cols-3 smmd:grid-cols-5 lg:grid-cols-6  gap-y-14 gap-x-24 px-10 container mx-auto py-[10%] ">
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/unnamed (3).png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Trust
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5 rounded-lg"
              src="src/assets/wallets/images/download.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Metamask
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5 rounded-lg"
              src="src/assets/wallets/images/en-coinbase-logo.jpg"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Coin base
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/Crypto.com-Buy-Bitcoin-Now-APK-MOD-Premium-Download-3.96.0.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Crypto.com
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/unnamed (2).png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              undefined
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Safepal
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/authereum.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center   hover:text-blue-700">
              Authereum
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/pO6fla5H_400x400.jpg"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Fint
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/nebulas.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Nebulas
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/tomo.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Tomo
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/enjin-coin-enj-logo.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Enjin
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/nimiq.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Nimiq
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/parsiq.jpg"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Parsiq
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center   hover:text-blue-700">
              Rainbow
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/wanchain.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Wanchain
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/iotex.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Iotex
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5 rounded-lg"
              src="src/assets/wallets/images/ethereum-classic.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Ethereum
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/kin.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              kin
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/14611.png"
              alt=""
            />
            <h5 className="text-yellow-500 text-center text-lg sm:text-lg md:text-xl lg:text-xl  hover:text-blue-700">
              Rice
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/6Gk7Sdhs_400x400.jpg"
              alt=""
            />
            <h5 className="text-yellow-500 text-center  hover:text-blue-700">
              Nami wallet
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src=" src/assets/wallets/images/8wVEhhpi_400x400.jpeg"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Ledger live
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src=" src/assets/wallets/images/RoeM48hT_400x400.png"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Bravos
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src=" src/assets/wallets/images/nem-1024x1024.png"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Nem
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/photo5940449033686465477.jpg"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              pera Algo
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/download (2).png"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Digitex
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/download (1).png"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Exodus
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/download.jpg"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Argent
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/Monarch-Wallet.png"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Monarch
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/download (3).png"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Cello
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img
              className="w-[90%] mb-5  rounded-lg"
              src="src/assets/wallets/images/wallet-connect.03da5e3f.svg"
              alt=""
            />
            <h5 className="text-yellow-500 hover:text-blue-700 text-center">
              Wallet Connect
            </h5>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default ConnectWallet