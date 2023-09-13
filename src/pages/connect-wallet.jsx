import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import walletimage from "../assets/wallets/images/photo_2021-07-13-16.27.25-removebg-preview.png";
import wallet1 from "../assets/wallets/images/unnamed (3).png";
import wallet2 from "../assets/wallets/images/download.png";
import wallet3 from "../assets/wallets/images/en-coinbase-logo.jpg";
import wallet4 from "../assets/wallets/images/Crypto.com-Buy-Bitcoin-Now-APK-MOD-Premium-Download-3.96.0.png";
import wallet5 from "../assets/wallets/images/unnamed (2).png";
import wallet6 from "../assets/wallets/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png";
import wallet7 from "../assets/wallets/images/authereum.png";
import wallet8 from "../assets/wallets/images/pO6fla5H_400x400.jpg";
import wallet9 from "../assets/wallets/images/nebulas.png";
import wallet10 from "../assets/wallets/images/tomo.png";
import wallet11 from "../assets/wallets/images/enjin-coin-enj-logo.png";
import wallet12 from "../assets/wallets/images/nimiq.png";
import wallet13 from "../assets/wallets/images/parsiq.jpg";
import wallet14 from "../assets/wallets/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png";
import wallet15 from "../assets/wallets/images/wanchain.png";
import wallet16 from "../assets/wallets/images/iotex.png";
import wallet17 from "../assets/wallets/images/ethereum-classic.png";
import wallet18 from "../assets/wallets/images/kin.png";
import wallet19 from "../assets/wallets/images/14611.png";
import wallet20 from "../assets/wallets/images/6Gk7Sdhs_400x400.jpg";
import wallet21 from "../assets/wallets/images/8wVEhhpi_400x400.jpeg";
import wallet22 from "../assets/wallets/images/RoeM48hT_400x400.png";
import wallet23 from "../assets/wallets/images/nem-1024x1024.png";
import wallet24 from "../assets/wallets/images/photo5940449033686465477.jpg";
import wallet25 from "../assets/wallets/images/download (2).png";
import wallet26 from "../assets/wallets/images/download (1).png";
import wallet27 from "../assets/wallets/images/download.jpg";
import wallet28 from "../assets/wallets/images/Monarch-Wallet.png";
import wallet29 from "../assets/wallets/images/download (3).png";
import wallet30 from "../assets/wallets/images/wallet-connect.03da5e3f.svg";
import wallet31 from "../assets/wallets/images/defi.png"

const ConnectWallet = () => {
  return (
    <>
      <div className="text-center py-14 px-10">
        <img
          className="w-[60%] sm:w-[45%] md:w-[30%] lg:w-[30%] mx-auto  rounded-lg"
          src={walletimage}
          alt=""
        />
        <h1 className="text-slate-50 text-6xl mb-8 font-semibold">
          How it works ?
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
            <img className="w-[90%] mb-5  rounded-lg" alt="" src={wallet1} />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Trust
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5 rounded-lg" src={wallet2} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Metamask
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5 rounded-lg" src={wallet3} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Coin base
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet4} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Crypto.com
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet31} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
             Defi
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet5} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              undefined
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet6} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Safepal
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet7} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center   hover:text-blue-700">
              Authereum
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet8} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Fint
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet9} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Nebulas
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet10} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Tomo
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet11} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Enjin
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet12} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Nimiq
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet13} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Parsiq
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet14} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center   hover:text-blue-700">
              Rainbow
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet15} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Wanchain
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet16} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Iotex
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5 rounded-lg" src={wallet17} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Ethereum
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet18} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              kin
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet19} alt="" />
            <h5 className="text-yellow-500 text-center text-lg sm:text-lg md:text-xl lg:text-xl  hover:text-blue-700">
              Rice
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet20} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Nami wallet
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet21} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Ledger live
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet22} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Bravos
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet23} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Nem
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet24} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              pera Algo
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet25} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Digitex
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet26} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Exodus
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet27} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Argent
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet28} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Monarch
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet29} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
              Cello
            </h5>
          </Link>
        </div>
        <div>
          <Link to="/submit">
            <img className="w-[90%] mb-5  rounded-lg" src={wallet30} alt="" />
            <h5 className="text-yellow-500 text-lg sm:text-lg md:text-xl lg:text-xl  text-center  hover:text-blue-700">
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