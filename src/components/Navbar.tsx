"use client";

import React, { useState } from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';
import Link from "next/link";
import { motion } from "framer-motion";
import styles from './Navbar.module.css';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../components/ui/dropdown-menu";
import { GradientBorderLogo } from '../components/ui/GradientBorderLogo';
import ShimmerButton from '../components/ui/ShimmerButton';
import ThemeToggleButton from '../components/ThemeToggleButton';
import ConnectionStatusSwitch from '../components/ConnectionStatusSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faStore, faTimeline, faEye, faLayerGroup, faLock, faClockRotateLeft, faClover,
  faSackDollar, faCircleQuestion, faHandshake, faClipboardQuestion, faShop, faGavel, faCirclePlus,
  faTableCells, faIdBadge, faCoins, faWallet, faBuildingColumns, faBabyCarriage, 
} from '@fortawesome/free-solid-svg-icons';

const gradientStyle = {
    height: "4px",
    width: "100%",
    border: "none",
  };
  
  const gradientAnimation = {
    background: [
      "linear-gradient(to right, #45E1E5, #0052FF, #B82EA4, #FF9533, #7FD057, #45E1E5)",
      "linear-gradient(to right, #0052FF, #B82EA4, #FF9533, #7FD057, #45E1E5, #0052FF)",
      "linear-gradient(to right, #B82EA4, #FF9533, #7FD057, #45E1E5, #0052FF, #B82EA4)",
      "linear-gradient(to right, #FF9533, #7FD057, #45E1E5, #0052FF, #B82EA4, #FF9533)",
      "linear-gradient(to right, #7FD057, #45E1E5, #0052FF, #B82EA4, #FF9533, #7FD057)",
      "linear-gradient(to right, #45E1E5, #0052FF, #B82EA4, #FF9533, #7FD057, #45E1E5)"
    ],
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity
    }
  };

interface NavbarProps {
  tokenId?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const { isConnected } = useAccount();
  const [logoState, setLogoState] = useState({
    src: "/logo123.webp",
    text: "BlackJack"
  });

  const changeLogo = () => {
    setLogoState({
      src: "/logo2.webp",
      text: "NftPawnShop"
    });
  };

  return (
    <div>
      <div className={styles.navbar}>
        <Link href={"/"}>
          <div className={styles.logoContainer}>
            <GradientBorderLogo
              src={logoState.src}
              alt="ElefantMarket Logo"
              size={85}
            />
            <span className={styles.logoText}>{logoState.text}</span>
          </div>
        </Link>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ShimmerButton className="shadow-2xl">
                <span className="text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Menu
                </span>
              </ShimmerButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={styles.dropdownMenu}>
              <DropdownMenuItem asChild>
                <Link href="/" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faHouse} style={{ color: "#74C0FC", marginRight: "8px" }} /> Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              
              {/* Marketplace Section */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FontAwesomeIcon icon={faShop} style={{ color: "#74C0FC", marginRight: "8px" }} /> Marketplace
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                <Link href="/" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faHouse} style={{ color: "#74C0FC", marginRight: "8px" }} /> Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className={`${styles.dropdownSectionTitle} ${styles.marketSectionTitle}`}>
              <FontAwesomeIcon icon={faShop} style={{ color: "#74C0FC", marginRight: "8px" }} /> Marketplace
              </div>
              <DropdownMenuItem asChild>
                <Link href="/Marketplace" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faStore} style={{ color: "#74C0FC", marginRight: "8px" }} /> Nft-Market
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/AuctionHouse" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faGavel} style={{ color: "#74C0FC", marginRight: "8px" }} /> Auction
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auk2" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faGavel} style={{ color: "#74C0FC", marginRight: "8px" }} /> Auk2
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/PurchaseHistory" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faClockRotateLeft} style={{ color: "#74C0FC", marginRight: "8px" }} /> Purchase-History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/OwnedNFTs" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faIdBadge} style={{ color: "#74C0FC", marginRight: "8px" }} /> My NFTs
                </Link>
              </DropdownMenuItem>              
              <DropdownMenuItem asChild>
                <Link href="/AddTokenToMetaMask" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faWallet} style={{ color: "#74C0FC", marginRight: "8px" }} /> Add-Token
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/Roadmap" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faTimeline} style={{ color: "#74C0FC", marginRight: "8px" }} /> Roadmap
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/GrandLottery" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faClover} style={{ color: "#74C0FC", marginRight: "8px" }} /> GrandLottery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/GrandLotteryWinners" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faClover} style={{ color: "#74C0FC", marginRight: "8px" }} /> GrandLottery Winners
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/NFTLottery" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faClover} style={{ color: "#74C0FC", marginRight: "8px" }} /> NFTLottery 
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/LotteryWinners" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faClover} style={{ color: "#74C0FC", marginRight: "8px" }} /> NFTLottery Winners
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/Launchpad" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faEye} style={{ color: "#74C0FC", marginRight: "8px" }} /> Launchpad
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/MintElefantgotchi" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#74C0FC", marginRight: "8px" }} /> Mint Elefantgotchi
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/Breeding" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faBabyCarriage} style={{ color: "#74C0FC", marginRight: "8px" }} /> Breeding
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ElegotchiGallery" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faTableCells} style={{ color: "#74C0FC", marginRight: "8px" }} /> Elegotchi Gallery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/GalleryRandom" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faTableCells} style={{ color: "#74C0FC", marginRight: "8px" }} /> Random Gallery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/RandomNFTMinter" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#74C0FC", marginRight: "8px" }} /> Mint RandomNFT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/qna" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faWallet} style={{ color: "#74C0FC", marginRight: "8px" }} /> Qna
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/MintNFT" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faLock} style={{ color: "#74C0FC", marginRight: "8px" }} /> Admin
                </Link>
              </DropdownMenuItem>
                  {/* ... (other Marketplace items) */}
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Staking Section */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#74C0FC", marginRight: "8px" }} /> Staking
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                <Link href="/FlexibleStaking" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCoins} style={{ color: "#74C0FC", marginRight: "8px" }} /> Flexible Staking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/LockedStakeSystem" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCoins} style={{ color: "#74C0FC", marginRight: "8px" }} /> Locked Staking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ShortStakeSystem" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCoins} style={{ color: "#74C0FC", marginRight: "8px" }} /> Short Staking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/RandomMetadataStaking" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCoins} style={{ color: "#74C0FC", marginRight: "8px" }} />Random Staking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/MilestoneStaking" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCoins} style={{ color: "#74C0FC", marginRight: "8px" }} />Milestone Staking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ElefantgotchiStake" className={styles.dropdownLink}>
                  <FontAwesomeIcon icon={faCoins} style={{ color: "#74C0FC", marginRight: "8px" }} />Elefantgotchi Staking
                </Link>
              </DropdownMenuItem>
                  {/* ... (other Staking items) */}
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Pawn Section */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <FontAwesomeIcon icon={faBuildingColumns} style={{ color: "#74C0FC", marginRight: "8px" }} /> Pawn Section
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                <DropdownMenuItem asChild>
                <Link href="/about" className={styles.dropdownLink} onClick={changeLogo}>
                  <FontAwesomeIcon icon={faClipboardQuestion} style={{ color: "#74C0FC", marginRight: "8px" }} /> About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" className={styles.dropdownLink} onClick={changeLogo}>
                  <FontAwesomeIcon icon={faCircleQuestion} style={{ color: "#74C0FC", marginRight: "8px" }} /> FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/PawnNFT" className={styles.dropdownLink} onClick={changeLogo}>
                  <FontAwesomeIcon icon={faSackDollar} style={{ color: "#74C0FC", marginRight: "8px" }} /> Pawn-NFT
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ViewTerms" className={styles.dropdownLink} onClick={changeLogo}>
                  <FontAwesomeIcon icon={faHandshake} style={{ color: "#74C0FC", marginRight: "8px" }} /> View-Terms
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/ManageLoans" className={styles.dropdownLink} onClick={changeLogo}>
                  <FontAwesomeIcon icon={faEye} style={{ color: "#74C0FC", marginRight: "8px" }} /> Manage-Loans
                </Link>
              </DropdownMenuItem>
                  {/* ... (other Pawn Section items) */}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggleButton />
          <ConnectionStatusSwitch isConnected={isConnected} />
          <span className="text-sm">
            {isConnected ? 'Connected' : 'Not Connected'}
          </span>
          <ConnectButton />
        </div>
      </div>
      {/* Animated Gradient Border */}
      <motion.div style={gradientStyle} animate={gradientAnimation} />
    </div>
  );
};

export default Navbar;