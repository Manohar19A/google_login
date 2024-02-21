import React, { useEffect, useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import axios from "axios";
import jsPDF from "jspdf";
import Parents from "./Parents";
import {
  Image,
  Text,
  View,
  Page,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ManageClub = () => {
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

  return (
    <div>
      <PDFDownloadLink document={<Parents />} fileName="fee_acceptance.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default ManageClub;
