import React, { useState } from "react";
import { Form, Input, AutoComplete } from "antd";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "../index.module.scss";
import { IMAGE_OPTIONS } from "../../../constants";
import IconArrowDown from "../images/arrow_down.svg";
import IconArrowRight from "../images/arrow_right.svg";
import DownArrow from "./DownArrow";
import { ItemLabel } from "./RunAndDebug";
import { CaretDownOutlined } from "@ant-design/icons";

const BasicConfig = () => {
  const [unfold, setUnfold] = useState<boolean>(false);
  const [imageArr, setImageArr] = useState([]);

  const handleSearch = () => {
    setImageArr(IMAGE_OPTIONS);
  };

  const handleSelect = (value: any) => {
    if (value?.target?.value) {
      setImageArr([]);
    }
  };

  return (
    <>
      <Form.Item
        label={translate({ message: "Container Name" })}
        rules={[{ required: true }]}
        name="name"
      >
        <Input
          style={{ width: 460 }}
          placeholder={translate({
            message: "Please Input Container Name",
          })}
        />
      </Form.Item>
      <Form.Item
        label={translate({ message: "Development Image" })}
        rules={[{ required: true }]}
        name="image"
      >
        <AutoComplete
          style={{ width: 460 }}
          options={imageArr}
          placeholder={translate({
            message: "Please Select OR Enter A Development Image",
          })}
          suffixIcon={DownArrow}
        >
          <Input.Search
            onSearch={handleSearch}
            onSelect={handleSelect}
            enterButton={<CaretDownOutlined />}
          />
        </AutoComplete>
      </Form.Item>
      <div
        className={styles["config-title"]}
        onClick={() => setUnfold(!unfold)}
      >
        {unfold ? <IconArrowDown /> : <IconArrowRight />}
        <span>
          <Translate>Other basic configuration items</Translate>
        </span>
      </div>
      {unfold && (
        <div className={styles["config-others"]}>
          <Form.Item
            label={translate({
              message: "Git Depository URL",
            })}
            name="gitUrl"
          >
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Git Depository URL",
              })}
            />
          </Form.Item>
          <Form.Item label="Shell" name="shell">
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Shell",
              })}
            />
          </Form.Item>
          <Form.Item
            label={translate({ message: "Work Directory" })}
            name="workDir"
          >
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Work Directory",
              })}
            />
          </Form.Item>
          <Form.Item
            label={
              <ItemLabel
                label="Sidecar"
                title={translate({ message: "sidecar tip" })}
              />
            }
            name="sidecarImage"
          >
            <Input
              style={{ width: 436 }}
              placeholder={translate({
                message: "Please Input Sidecar Image URL",
              })}
            />
          </Form.Item>
        </div>
      )}
    </>
  );
};

export default BasicConfig;
