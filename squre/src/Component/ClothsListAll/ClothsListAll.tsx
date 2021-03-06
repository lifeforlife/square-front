import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ClothsItem from "../ClothsItem";
import { ClothsAllProps } from "../../Types/ClothsProps";
import { ClothsAllType } from "../../Types/ClothsTypes";

const useStyles = makeStyles({
  itemBox: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  titleBox: {
    display: "flex"
  },
  title: {
    padding: "10px 10px 30px 20px"
  },
  listCount: {
    paddingTop: 23
  }
});

const ClothsListAll = ({ cloths, title, count }: ClothsAllProps) => {
  const classes = useStyles();

  console.log({ cloths });
  return (
    <div className="clothslist-all">
      <Box className={classes.titleBox}>
        <Typography variant="h4" className={classes.title}>
          {title.toUpperCase()}
        </Typography>
        <Box className={classes.listCount}> ({count})</Box>
      </Box>
      <Box className={classes.itemBox}>
        {cloths.map(
          ({
            id,
            cloth_detail_musinsa,
            productNo,
            brand,
            title,
            clothImgSuffix,
            price,
            category
          }: ClothsAllType) => (
            <ClothsItem
              key={id}
              id={id}
              cloth_detail_musinsa={cloth_detail_musinsa}
              productNo={productNo}
              brand={brand}
              title={title}
              clothImgSuffix={clothImgSuffix}
              original_price={price.original_price}
              discounted_price={price.discounted_price}
              category={category}
            />
          )
        )}
      </Box>
    </div>
  );
};

export default ClothsListAll;
