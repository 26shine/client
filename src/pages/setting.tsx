import React, { useState, useEffect } from "react";
import styles from "./setting.module.css";

const Setting = () => {
  const [onCallDate, setOnCallDate] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedOnCallDate = localStorage.getItem("onCallDate");
    if (savedOnCallDate) {
      setOnCallDate(savedOnCallDate);
    }
  }, []);

  useEffect(() => {
    const savedOnCallDate = localStorage.getItem("onCallDate");
    console.log(onCallDate, savedOnCallDate);
    setSaved(onCallDate === savedOnCallDate);
  }, [onCallDate]);

  const handleSaveSetting = () => {
    localStorage.setItem("onCallDate", onCallDate);
    setSaved(true);
  };

  return (
    <div className={styles.setting_wrapper}>
      <h1>Setting</h1>
      <div>
        <span>Ngày điểm danh:</span>
        <div className={styles.input_container}>
          <input
            type='text'
            placeholder='Nhập ngày điểm danh'
            value={onCallDate}
            onChange={(e) => setOnCallDate(e.target.value)}
          />
          <button onClick={handleSaveSetting} disabled={saved}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
