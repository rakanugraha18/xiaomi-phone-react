import React from "react";
import ListItems from "../../atoms/Global/ListItem";

const FooterList = ({ listtitle, listprops }) => {
  return (
    <>
      <h3 className="mb-[16px]">{listtitle}</h3>
      <ul className="flex flex-col">
        {listprops.map((item, index) => (
          <ListItems
            key={index}
            redirect={item.to}
            text={item.pagename}
            className="h-full"
            title={item.pagename}
          />
        ))}
      </ul>
    </>
  );
};

export default FooterList;
