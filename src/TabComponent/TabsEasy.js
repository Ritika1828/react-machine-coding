import React from "react";
import cx from "classnames"
import styles from "./index.module.scss";


function TabEasy({ label, ...args }) {
  return (
    <div className="tabBox" {...args}>
      {label}
    </div>
  );
}


function TabsEasy({ children, onChange, activeTab, textColor = "primary", tabColor="primary" }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        {children.map((item, index) => {
          {console.log(item.props, 'item')}
        return (
          <div
            key={index}
            className={`tabsItem ${activeTab== index ? `active ${tabColor} ${textColor}`:''}`}
            // className={ cx(styles.tabsItem, styles[textColor], styles[tabColor], {[styles.active]: activeTab == index , [styles.disabled]:item.props.disabled })}
            onClick={item?.props?.disabled ? null :(e) => onChange(e, index)}
          >
            {item} 
          </div>
        );
      })}
    </div>
  );
}



export { TabsEasy, TabEasy };

