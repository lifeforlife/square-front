import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

type ClothsType = {
  id: number;
  cloth_detail_musinsa: number;
  productNo: string;
  brand: string;
  title: string;
  clothImgSuffix: string;
  original_price: string;
  discounted_price: string;
  category: string;
};

const useStyles = makeStyles({
  root: {
    padding: 20
  },
  headerTitle: {
    padding: "0 20px"
  },
  header: {
    display: "flex"
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    padding: "12px 20px",
    color: "gray"
  },
  headerBrand: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 14
  },
  contents: {
    display: "flex"
  },
  imgBox: {
    padding: 10,
    width: 500,
    height: 600
  },
  img: {
    width: "100%",
    height: "100%"
  },
  infoBox: {
    padding: 20,
    width: 550,
    height: 600
  },
  box: {
    width: "100%",
    height: 300
  },
  detailHeader: {
    padding: "10px 30px",
    width: "100%"
  },
  detailContents: {
    fontSize: 12,
    padding: 30,
    lineHeight: "30px"
  },
  table: {
    display: "flex",
    padding: "10px 30px"
  },
  tableKey: { flex: 2 },
  tableValue: { flex: 6, fontWeight: "bold" },
  subBox: {
    display: "flex"
  },
  price: {
    padding: "20px 30px",
    flex: 1
  },
  buy: {
    padding: 13
  }
});

const ClothsDetail = ({
  id,
  cloth_detail_musinsa,
  productNo,
  brand,
  title,
  clothImgSuffix,
  original_price,
  discounted_price,
  category
}: ClothsType) => {
  const classes = useStyles();

  return (
    <div className="detail-item">
      <Box className={classes.root}>
        <Typography variant="h4" className={classes.headerTitle}>
          {title}
        </Typography>
        <Box className={classes.header}>
          <Box className={classes.category}>
            <Link
              to={`/square-front/${category}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {category}
            </Link>
          </Box>
          <Box py={2}> > </Box>
          <Box className={classes.headerBrand}>
            <Link
              to={`/square-front/brand/${brand}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {brand}
            </Link>
          </Box>
        </Box>
        <Box className={classes.contents}>
          <Box className={classes.imgBox}>
            <img
              src={`https://image.msscdn.net/images/goods_img/${clothImgSuffix}`}
              alt={title}
              className={classes.img}
            />
          </Box>
          <Box className={classes.infoBox}>
            <Box className={classes.box}>
              <Typography variant="h4" className={classes.detailHeader}>
                Detail
              </Typography>
              <Box className={classes.detailContents}> </Box>
            </Box>
            <hr />
            <Box className={classes.table}>
              <Box className={classes.tableKey}> 브랜드명 / 품명 </Box>
              <Box className={classes.tableValue}>
                {brand} / {productNo}
              </Box>
            </Box>
            <Box className={classes.table}>
              <Box className={classes.tableKey}> 제품명 </Box>
              <Box className={classes.tableValue}>{title}</Box>
            </Box>
            <Box className={classes.table}>
              <Box className={classes.tableKey}> 성별 </Box>
              <Box className={classes.tableValue}> </Box>
            </Box>
            <hr />
            <Box className={classes.subBox}>
              <Box className={classes.price}> {original_price} </Box>
              <Box className={classes.buy}>
                <a
                  href={`https://store.musinsa.com/app/product/detail/${productNo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ClothsDetail;