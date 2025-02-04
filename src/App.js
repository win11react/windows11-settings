import { useState, useEffect } from "react";

import "./style.scss";
import data from "./data.json";

function App() {
  const [state, setState] = useState("System");

  useEffect(() => {
    document.querySelectorAll(".navLink").forEach((e) => {
      e.addEventListener("click", function () {
        const current = document.querySelectorAll(".active");
        if (current.length > 0) {
          current[0].classList.remove("active");
        }
        this.classList.add("active");
        document.querySelector("nav").classList.remove("open");

        const marker = document.querySelector(".marker");
        marker.classList.add("active");

        setTimeout(() => {
          marker.classList.remove("active");
        }, 150);
      });
    });
  });

  return (
    <>
      <nav>
        <div className="nav_top">
          <div className="account" onClick={() => setState("Accounts")}>
            <img src="img/nav/defAccount.webp" alt="" height={60} width={60} />
            <div>
              <p>Yashash</p>
              <p>Local Account</p>
            </div>
          </div>
          <input type="text" className="search" placeholder="Find a setting " name="search" />
        </div>
        <div className="nav_bottom">
          {Object.keys(data).map((e) => {
            return (
              <div key={e} className="navLink" onClick={() => setState(e)}>
                <img src={`img/nav/${e}.webp`} alt="" height={16} width={16} />
                {e}
              </div>
            );
          })}
          <div className="marker"></div>
        </div>
      </nav>

      {Object.keys(data).map((e) => {
        return (
          state === e && (
            <main key={e}>
              <h1>{e}</h1>
              <div className="tilesCont">
                {data[e].map((e) => {
                  return (
                    <div key={e.name} className={e.type}>
                      <span>{e.icon}</span>
                      <div>
                        <p>{e.name}</p>
                        <p className="tile_desc">{e.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          )
        );
      })}

      <div className="navMenuBtn" onClick={() => document.querySelector("nav").classList.toggle("open")}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width={24} height={24}>
          <path d="M5.5 9a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37z" />
        </svg>
      </div>
    </>
  );
}
export default App;
