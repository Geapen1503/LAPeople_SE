import "../LaSearchBar.css"
import ZigZagFrame from "../img/ZigZagFrame.png";
import React, { useState } from "react";

import dreImg from "../img/LaPeopleFaces/dre.jpg";
import nateImg from "../img/LaPeopleFaces/natedogg.jpg";
import docImg from "../img/LaPeopleFaces/DOC.png";
import warrenImg from "../img/LaPeopleFaces/warreng.jpg";
import snoopImg from "../img/LaPeopleFaces/snoop.jpg";
import sugeImg from "../img/LaPeopleFaces/sugeknight.jpg";
import  eazyImg from "../img/LaPeopleFaces/eazye.png";
import iceImg from "../img/LaPeopleFaces/iceCube.jpg";
import garyImg from "../img/LaPeopleFaces/gary.jpg";
import warningLogo from "../img/parentalAdvisoryLogo.png";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredPeople, setFilteredPeople] = useState([]);

    const laPeople = [
        { name: "Dr Dre", face: dreImg },
        { name: "Nate Dogg", face: nateImg },
        { name: "The D.O.C", face: docImg},
        { name: "Warren G", face: warrenImg},
        { name: "Snoop Dogg", face: snoopImg},
        { name: "Suge Knight", face: sugeImg},
        { name: "Eazy-e", face: eazyImg},
        { name: "Ice Cube", face: iceImg},
        { name: "Gary Gero", face: garyImg},

    ];

    const handleSearchBarChanges = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchInput(searchTerm);
        if (searchTerm === "") {
            setFilteredPeople([]); // If search input is empty, set filteredPeople to an empty array
        } else {
            const filtered = laPeople.filter((person) =>
                person.name.toLowerCase().includes(searchTerm)
            );
            setFilteredPeople(filtered);
        }
    };

    if (searchInput.length > 0) {
        laPeople.filter((laMan) => {
            return laMan.name.match(searchInput);
        });
    }


    return (
        <div className="App">
            <img className="warningLogo" alt="parental advisory content" src={warningLogo}/>

            <div className="searchResultBox">
                <div>
                    <img className="ZigZagFrameImg" src={ZigZagFrame} alt="Zig Zag Frame"></img>
                    <div className="laFaceBox">
                        {filteredPeople.length > 0 && (
                            <img className="laFaceImg" src={filteredPeople[0].face} alt={filteredPeople[0].name} />
                        )}
                    </div>
                </div>

                <input
                    className="searchBarUI"
                    type="text"
                    placeholder="Search here"
                    onChange={handleSearchBarChanges}
                    value={searchInput}
                />
                <table>
                    <thead>
                    <tr>
                        <th>Name :</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPeople.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default SearchBar;
