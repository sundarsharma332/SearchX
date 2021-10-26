import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
      <section className="webdesigntuts-workshop">
          
        <div className="Search-logo">
          <svg
            width="140"
            height="55"
            viewBox="0 0 140 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 54.175C5.53333 54.175 4.43333 53.9667 3.45 53.55C2.48333 53.1333 1.71667 52.5333 1.15 51.75C0.583333 50.9667 0.291667 50.0417 0.275 48.975H4.025C4.075 49.6917 4.325 50.2583 4.775 50.675C5.24167 51.0917 5.875 51.3 6.675 51.3C7.49167 51.3 8.13333 51.1083 8.6 50.725C9.06667 50.325 9.3 49.8083 9.3 49.175C9.3 48.6583 9.14167 48.2333 8.825 47.9C8.50833 47.5667 8.10833 47.3083 7.625 47.125C7.15833 46.925 6.50833 46.7083 5.675 46.475C4.54167 46.1417 3.61667 45.8167 2.9 45.5C2.2 45.1667 1.59167 44.675 1.075 44.025C0.575 43.3583 0.325 42.475 0.325 41.375C0.325 40.3417 0.583333 39.4417 1.1 38.675C1.61667 37.9083 2.34167 37.325 3.275 36.925C4.20833 36.5083 5.275 36.3 6.475 36.3C8.275 36.3 9.73333 36.7417 10.85 37.625C11.9833 38.4917 12.6083 39.7083 12.725 41.275H8.875C8.84167 40.675 8.58333 40.1833 8.1 39.8C7.63333 39.4 7.00833 39.2 6.225 39.2C5.54167 39.2 4.99167 39.375 4.575 39.725C4.175 40.075 3.975 40.5833 3.975 41.25C3.975 41.7167 4.125 42.1083 4.425 42.425C4.74167 42.725 5.125 42.975 5.575 43.175C6.04167 43.3583 6.69167 43.575 7.525 43.825C8.65833 44.1583 9.58333 44.4917 10.3 44.825C11.0167 45.1583 11.6333 45.6583 12.15 46.325C12.6667 46.9917 12.925 47.8667 12.925 48.95C12.925 49.8833 12.6833 50.75 12.2 51.55C11.7167 52.35 11.0083 52.9917 10.075 53.475C9.14167 53.9417 8.03333 54.175 6.75 54.175ZM28.8344 46.775C28.8344 47.275 28.801 47.725 28.7344 48.125H18.6094C18.6927 49.125 19.0427 49.9083 19.6594 50.475C20.276 51.0417 21.0344 51.325 21.9344 51.325C23.2344 51.325 24.1594 50.7667 24.7094 49.65H28.4844C28.0844 50.9833 27.3177 52.0833 26.1844 52.95C25.051 53.8 23.6594 54.225 22.0094 54.225C20.676 54.225 19.476 53.9333 18.4094 53.35C17.3594 52.75 16.5344 51.9083 15.9344 50.825C15.351 49.7417 15.0594 48.4917 15.0594 47.075C15.0594 45.6417 15.351 44.3833 15.9344 43.3C16.5177 42.2167 17.3344 41.3833 18.3844 40.8C19.4344 40.2167 20.6427 39.925 22.0094 39.925C23.326 39.925 24.501 40.2083 25.5344 40.775C26.5844 41.3417 27.3927 42.15 27.9594 43.2C28.5427 44.2333 28.8344 45.425 28.8344 46.775ZM25.2094 45.775C25.1927 44.875 24.8677 44.1583 24.2344 43.625C23.601 43.075 22.826 42.8 21.9094 42.8C21.0427 42.8 20.3094 43.0667 19.7094 43.6C19.126 44.1167 18.7677 44.8417 18.6344 45.775H25.2094ZM30.4891 47.025C30.4891 45.625 30.7641 44.3833 31.3141 43.3C31.8807 42.2167 32.6391 41.3833 33.5891 40.8C34.5557 40.2167 35.6307 39.925 36.8141 39.925C37.8474 39.925 38.7474 40.1333 39.5141 40.55C40.2974 40.9667 40.9224 41.4917 41.3891 42.125V40.15H44.9141V54H41.3891V51.975C40.9391 52.625 40.3141 53.1667 39.5141 53.6C38.7307 54.0167 37.8224 54.225 36.7891 54.225C35.6224 54.225 34.5557 53.925 33.5891 53.325C32.6391 52.725 31.8807 51.8833 31.3141 50.8C30.7641 49.7 30.4891 48.4417 30.4891 47.025ZM41.3891 47.075C41.3891 46.225 41.2224 45.5 40.8891 44.9C40.5557 44.2833 40.1057 43.8167 39.5391 43.5C38.9724 43.1667 38.3641 43 37.7141 43C37.0641 43 36.4641 43.1583 35.9141 43.475C35.3641 43.7917 34.9141 44.2583 34.5641 44.875C34.2307 45.475 34.0641 46.1917 34.0641 47.025C34.0641 47.8583 34.2307 48.5917 34.5641 49.225C34.9141 49.8417 35.3641 50.3167 35.9141 50.65C36.4807 50.9833 37.0807 51.15 37.7141 51.15C38.3641 51.15 38.9724 50.9917 39.5391 50.675C40.1057 50.3417 40.5557 49.875 40.8891 49.275C41.2224 48.6583 41.3891 47.925 41.3891 47.075ZM51.8324 42.3C52.2824 41.5667 52.8658 40.9917 53.5824 40.575C54.3158 40.1583 55.1491 39.95 56.0824 39.95V43.625H55.1574C54.0574 43.625 53.2241 43.8833 52.6574 44.4C52.1074 44.9167 51.8324 45.8167 51.8324 47.1V54H48.3324V40.15H51.8324V42.3ZM57.5398 47.075C57.5398 45.6417 57.8315 44.3917 58.4148 43.325C58.9982 42.2417 59.8065 41.4083 60.8398 40.825C61.8732 40.225 63.0565 39.925 64.3898 39.925C66.1065 39.925 67.5232 40.3583 68.6398 41.225C69.7732 42.075 70.5315 43.275 70.9148 44.825H67.1398C66.9398 44.225 66.5982 43.7583 66.1148 43.425C65.6482 43.075 65.0648 42.9 64.3648 42.9C63.3648 42.9 62.5732 43.2667 61.9898 44C61.4065 44.7167 61.1148 45.7417 61.1148 47.075C61.1148 48.3917 61.4065 49.4167 61.9898 50.15C62.5732 50.8667 63.3648 51.225 64.3648 51.225C65.7815 51.225 66.7065 50.5917 67.1398 49.325H70.9148C70.5315 50.825 69.7732 52.0167 68.6398 52.9C67.5065 53.7833 66.0898 54.225 64.3898 54.225C63.0565 54.225 61.8732 53.9333 60.8398 53.35C59.8065 52.75 58.9982 51.9167 58.4148 50.85C57.8315 49.7667 57.5398 48.5083 57.5398 47.075ZM81.2789 39.95C82.3289 39.95 83.2622 40.1833 84.0789 40.65C84.8956 41.1 85.5289 41.775 85.9789 42.675C86.4456 43.5583 86.6789 44.625 86.6789 45.875V54H83.1789V46.35C83.1789 45.25 82.9039 44.4083 82.3539 43.825C81.8039 43.225 81.0539 42.925 80.1039 42.925C79.1372 42.925 78.3706 43.225 77.8039 43.825C77.2539 44.4083 76.9789 45.25 76.9789 46.35V54H73.4789V35.5H76.9789V41.875C77.4289 41.275 78.0289 40.8083 78.7789 40.475C79.5289 40.125 80.3622 39.95 81.2789 39.95ZM124.282 54L113.338 37.488L103.642 54H89.2422L106.618 27.312L89.0502 0.815998H104.218L115.066 17.232L124.858 0.815998H139.258L121.786 27.312L139.45 54H124.282Z"
              fill="white"
            />
          </svg>
          <p className = "moto-text">Quality <span> and Optimized Search Space</span></p>
        </div>
        <form action="" method="">
          <input type="search" placeholder="What are you looking for?" />
          <button>Search</button>
        </form>
      </section>
  );
};

export default HomePage;
