"use client"
import React from "react";
import {IconButton} from "@mui/material";
import Link from "next/link";

export default function Home() {
    return(
        <div className="flex items-center ">

            <h1>Hello</h1>
            <IconButton >
                <Link href={'/wishlist'} >
                 pleas route /wishlist
                </Link>
            </IconButton>

        </div>
    );
}
