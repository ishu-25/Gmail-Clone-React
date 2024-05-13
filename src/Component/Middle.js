import { ListItem, Paper } from "@mui/material";
import React, { useEffect, useState ,createContext} from "react";
import star from "../images/star.png";
import refresh from "../images/refresh.png";
import {
  doc,
  collection,
  getDocs,
  deleteDoc,
  setDoc,
  orderBy,
} from "firebase/firestore";
import { auth, database } from "../firebase/setup";
import remove from "../images/bin.png";
import yellow from "../images/yellow.png";
import snooze from "../images/snooze.png";
import lens from "../images/lens.png";
import dots from "../images/dots.png";
import box from "../images/box.png";
import larrow from "../images/left arrow.png";
import rarrow from "../images/right arrow.png";
import barrow from "../images/bottom arrow.png";
import key from "../images/keyboard.png";
import moment from "moment";
import { useNavigate } from "react-router-dom";



export const Middle = (props) => {
  const [mailData, setMailData] = useState([]);
  const navigate = useNavigate();
  const [hoveredEmailId, setHoveredEmailId] = useState(null);

  const deleteMail = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Inbox", `${data.id}`);
    const starredDoc = doc(userDoc, "Starred", `${data.id}`);
    const snoozedDoc = doc(userDoc, "Snoozed", `${data.id}`);
    const sendDoc = doc(userDoc, "send", `${data.id}`);
    const trashDoc = doc(userDoc, "Trash", `${data.id}`);
    try {
      await deleteDoc(starredDoc);
      await deleteDoc(snoozedDoc);
      await deleteDoc(messageDoc);
      await deleteDoc(sendDoc);
      await setDoc(trashDoc, {
        email: data.email,
        sender: data.sender,
        createdAt: data.createdAt,
        deleted: true,
      });
    } catch (err) {
      console.error(err);
    }
  };


  const getMail = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = collection(userDoc,`${props.subCollect ? props.subCollect : "Inbox"}`);
    try {
      const data = await getDocs(messageDoc);
      // const query = await (data.orderBy('createdAt'));
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMailData(filteredData);
      // console.log('userDoc',userDoc)
    } catch (err) {
      console.error(err);
    }
  };
  

  const handleRefresh = () => {
    getMail();
  };

  const starred = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Starred", `${data.id}`);
    try {
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        createdAt: data.createdAt,
        starred: "true",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const starredRemove = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const starredDoc = doc(userDoc, "Starred", `${data.id}`);
    try {
      await deleteDoc(starredDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const snoozed = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const messageDoc = doc(userDoc, "Snoozed", `${data.id}`);
    const snoozeDoc = doc(userDoc, "Inbox", `${data.id}`);
    try {
      await deleteDoc(snoozeDoc);
      await setDoc(messageDoc, {
        email: data.email,
        sender: data.sender,
        createdAt: data.createdAt,
        snoozed: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const snoozedRemove = async (data) => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.email}`);
    const snoozeDoc = doc(userDoc, "Snoozed", `${data.id}`);
    const inboxDoc = doc(userDoc, "Inbox", `${data.id}`);

    try {
      await deleteDoc(snoozeDoc);
      await setDoc(inboxDoc, {
        email: data.email,
        sender: data.sender,
        createdAt: data.createdAt,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMail();
  }, [props.subCollect]); 

  const searchHandler = (e) => {
    props.setSearch(e.target.value.toLowerCase());
  };

  const mailDate = (createdAt) => {
    if (!createdAt) {
      return "";
    }
    const currentDate = moment(createdAt.toDate());
    const today = moment().startOf("day");
    if (currentDate.isSame(today, "day")) {
      return currentDate.format("h:mm A");
    } else {
      const monthDate = currentDate.format("MMM DD");
      return `${monthDate}`;
    }
  };


  return (
    
    <div style={{ width: "74vw" }}>
      <div
        style={{
          marginLeft: "19.6vw",
          zIndex: "1",
          position: "fixed",
          backgroundColor: "#F9F9F9",
          top: "0",
          width: "75.5vw",
          height: "5vw",
        }}>
        <div
          style={{
            marginTop: "0.7vw",
            marginLeft: "0.5vw",
            display: "flex",
            alignItems: "center",
            borderRadius: "40px",
            backgroundColor: "#E4EFFA",
            width: "55vw",
            height: "3.7vw",
          }}
        >
          <img
            src={lens}
            style={{
              width: "1.3vw",
              height: "1.3vw",
              alignItems: "center",
              marginLeft: "15px",
            }}
          />

          <input
            onChange={searchHandler}
            placeholder='Search mail'
            style={{
              marginLeft: "3vw",
              height: "3vw",
              width: "45vw",
              backgroundColor: "#E4EFFA",
              border: "none",
              outline: "none",
              fontSize: "1vw",
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginLeft: props.isOpen ? "19.6vw" : "5.7vw",
          width: props.isOpen ? "74vw" : "88vw",
        }}>

        
        <div style={{paddingBottom: "1vw", marginTop: "5vw" }}>
          <img
            src={box}
            style={{
              cursor: "pointer",
              width: "1.2vw",
              height: "1.2vw",
              marginLeft: "1.5vw",
              marginTop: "2vw",
            }} />

          <img
            src={barrow}
            style={{
              cursor: "pointer",
              width: "1.3vw",
              height: "1.3vw",
              marginTop: "2vw",
            }}
          />
          {/* <div style={{zIndex:1,backgroundColor:'#fff',position:'fixed' ,paddingBottom: '1vw', boxShadow: ' 0 -1px 0 0', marginTop: '5vw',  width: props.isOpen ? '74vw' : '88vw'}}> */}
          <img
            onClick={handleRefresh}
            src={refresh}
            style={{
              cursor: "pointer",
              width: "1.4vw",
              height: "1.4vw",
              marginLeft: "1.5vw",
              marginTop: "2vw",
            }}
          />

          <img
            src={dots}
            style={{
              cursor: "pointer",
              width: "1.1vw",
              height: "1.2vw",
              marginLeft: "1.5vw",
              marginTop: "2vw",
            }}
          />

    
          <img
            src={larrow}
            style={{
              cursor: "pointer",
              width: "1.1vw",
              height: "1.2vw",
              marginLeft: props.isOpen ? "56.1vw" : "70vw",
              marginBottom: "0.4vw",
            }}
          />

          <img
            src={rarrow}
            style={{
              cursor: "pointer",
              width: "1.1vw",
              height: "1.2vw",
              marginLeft: "1.5vw",
              marginBottom: "0.4vw",
            }}
          />

          <img
            src={key}
            style={{
              cursor: "pointer",
              width: "1.5vw",
              height: "1.6vw",
              marginLeft: "1.5vw",
              marginTop: "2vw",
            }}
          />

          <img
            src={barrow}
            style={{
              cursor: "pointer",
              width: "1.3vw",
              height: "1.3vw",
              marginBottom: "0.4vw",
            }}
          />
        </div>
      

        {props.search
          ? mailData
              .filter((data) =>
                data.sender?.toLowerCase().includes(props.search)
              )
              .map((data) => {
                return (
                  <>
                    <Paper
                      onClick={() => navigate(`/main/${data.id}`)}
                      onMouseEnter={() => setHoveredEmailId(data.id)}
                      onMouseLeave={() => setHoveredEmailId(null)}
                      key={data.id}
                      elevation={0}
                      style={{
                        cursor:'pointer',
                        backgroundColor:
                          hoveredEmailId === data.id ? "#ECECEC" : "#F8FCFF",
                        borderTop: "1px solid #EFEFEF",
                        borderBottom: "1px solid #EFEFEF",
                      }}
                    >
                      <ListItem>
                        {data.starred ? (
                          <>
                            <img
                              onClick={(e) => {
                                e.stopPropagation();
                                starredRemove(data);
                              }}
                              src={yellow}
                              style={{
                                width: "1.4vw",
                                height: "1.4vw",
                                cursor: "pointer",
                              }}
                            />
                          </>
                        ) : (
                          <img
                            onClick={(e) => {
                              e.stopPropagation();
                              starred(data);
                            }}
                            src={star}
                            style={{
                              cursor: "pointer",
                              width: "1.4vw",
                              height: "1.4vw",
                            }}
                          />
                        )}

                        <div
                          style={{
                            width: "15vw",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "1.3vw",
                            marginLeft: "1.2vw",
                            fontWeight: "500",
                          }}
                        >
                          {data.sender}
                        </div>

                        <div
                          style={{
                            fontSize: "1.3",
                            cursor: "pointer",
                            marginLeft: "5vw",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: "40vw",
                            fontWeight: "200",
                          }}
                        >
                          {data.email}
                        </div>

                        <div style={{ zIndex: 1 }}>
                          {hoveredEmailId === data.id && (
                            <img
                              onClick={(e) => {
                                e.stopPropagation();
                                data.snoozed
                                  ? snoozedRemove(data)
                                  : snoozed(data);
                              }}
                              src={snooze}
                              style={{
                                width: "1.3vw",
                                height: "1.3vw",
                                marginLeft: "1vw",
                                cursor: "pointer",
                              }}
                            />
                          )}

                          {hoveredEmailId === data.id && (
                            <img
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteMail(data);
                              }}
                              src={remove}
                              style={{
                                width: "1.1vw",
                                height: "1.1vw",
                                marginLeft: "1vw",
                                cursor: "pointer",
                              }}
                            />
                          )}
                        </div>

                        {hoveredEmailId !== data.id && (
                          <div
                            style={{
                              marginLeft: props.isOpen ? "3.1vw" : "17vw",
                              fontSize: "1vw",
                              fontWeight: "500",
                            }}
                          >
                            {mailDate(data.createdAt)}
                          </div>
                        )}
                      </ListItem>
                    </Paper>
                  </>
                );
              })
          : mailData.map((data) => {
              return (
                <>
                {/* <Link to={`/main/${data.id}/${data.subject}`}> */}

                  <Paper
                    onClick={() => navigate(`/main/${data.id}`)}
                    onMouseEnter={() => setHoveredEmailId(data.id)}
                    onMouseLeave={() => setHoveredEmailId(null)}
                    key={data.id}
                    elevation={0}
                    style={{
                      cursor:'pointer',
                      backgroundColor:
                        hoveredEmailId === data.id ? "#ECECEC" : "#F8FCFF",
                      borderTop: "1px solid #EFEFEF",
                      borderBottom: "1px solid #EFEFEF",
                    }}
                  >
                    <ListItem>
                      {data.starred ? (
                        <>
                          <img
                            onClick={(e) => {
                              e.stopPropagation();
                              starredRemove(data);
                            }}
                            src={yellow}
                            style={{
                              width: "1.4vw",
                              height: "1.4vw",
                              cursor: "pointer",
                            }}
                          />
                        </>
                      ) : (
                        <img
                          onClick={(e) => {
                            e.stopPropagation();
                            starred(data);
                          }}
                          src={star}
                          style={{
                            cursor: "pointer",
                            width: "1.4vw",
                            height: "1.4vw",
                          }}
                        />
                      )}

                      <div
                        style={{
                          width: "15vw",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontSize: "1.3vw",
                          marginLeft: "1.2vw",
                          fontWeight: "500",
                        }}
                      >
                        {data.sender}
                      </div>

                      <div
                        style={{
                          cursor: "pointer",
                          marginLeft: "5vw",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: props.isOpen ? "40vw" : "55vw",
                          fontWeight: "200",
                          fontSize:'1.3vw'
                        }}
                      >
                        {data.email}
                      </div>

                      {hoveredEmailId === data.id && (
                        <img
                          onClick={(e) => {
                            e.stopPropagation();
                            data.snoozed ? snoozedRemove(data) : snoozed(data);
                          }}
                          src={snooze}
                          style={{
                            width: "1.3vw",
                            height: "1.3vw",
                            marginLeft: "1vw",
                            cursor: "pointer",
                          }}
                        />
                      )}

                      {hoveredEmailId === data.id && (
                        <img
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteMail(data);
                          }}
                          src={remove}
                          style={{
                            width: "1.1vw",
                            height: "1.1vw",
                            marginLeft: "1vw",
                            cursor: "pointer",
                          }}
                        />
                      )}

                      {hoveredEmailId !== data.id && (
                        <div
                          style={{
                            marginLeft: props.isOpen ? "2.8vw" : "1.7vw",
                            fontSize: "1vw",
                            fontWeight: "500",
                          }}
                        >
                          {mailDate(data.createdAt)}
                        </div>
                      )}
                    </ListItem>
                  </Paper>
                    {/* Render your email item here */}
{/*  </Link> */}
                </>
              );
            })}

        <h6
          style={{
            fontWeight: "400",
            marginLeft: props.isOpen ? "28vw" : "35vw",
            marginTop: "1vw",
            marginBottom: "1vw",
            fontSize: "1vw",
          }}
        >
          Terms · Privacy · Program Policies
        </h6>
      </div>
    </div>
  );
}

export default Middle;

