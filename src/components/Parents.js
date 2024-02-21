import { Image, Text, View, Page, Document } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Parents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://31.187.75.117:8989/bed/getBedsByBuildingId/3")
      .then((res) => {
        console.log(res);
        setData(res?.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  }, []);

  const InvoiceTitle = () => (
    <Document>
      <Page
        size="A4"
        style={{
          paddingTop: 20,
          paddingLeft: 40,
          paddingRight: 40,
          lineHeight: 1.5,
        }}
      >
        <View>
          {data.map((item) => (
            <View style={{ display: "flex" }}>
              <Text style={{ fontSize: 16, textAlign: "center" }}>
                {item?.buildingName}
              </Text>
              {item?.floors?.map((floor) => (
                <View>
                  <Text style={{ fontSize: 14, fontStyle: "bold" }}>
                    {floor.floorName}
                  </Text>
                  {floor?.rooms?.map((room) => (
                    <View
                      style={{ flexDirection: "row", padding: 20, gap: 20 }}
                    >
                      <Text style={{ fontSize: 12, fontStyle: "bold" }}>
                        {room?.roomNumber}
                      </Text>
                      {room?.beds?.map((bed) => (
                        <View style={{ flexDirection: "column" }}>
                          <Image
                            style={{
                              height: 70,
                              width: 70,
                              borderRadius: 50,
                              marginTop: 10,
                            }}
                            src="https://th.bing.com/th/id/OIP.iAhcp6m_91O-ClK79h8EQQHaFj?rs=1&pid=ImgDetMain"
                          />
                          <Text style={{ fontSize: 10 }}>{bed?.bedId}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
  const generatePdfDocument = async (documentData, fileName) => {
    const blob = await pdf(<InvoiceTitle title="My PDF" />).toBlob();
    saveAs(blob, fileName);
  };
  return (
    <>
      {data?.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <button onClick={generatePdfDocument()}>Download</button>
      )}
    </>
  );
};

export default Parents;
