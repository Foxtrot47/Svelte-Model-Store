import type { Sequelize } from "sequelize";
import { address as _address } from "./address";
import type { addressAttributes, addressCreationAttributes } from "./address";
import { deliverydetails as _deliverydetails } from "./deliverydetails";
import type { deliverydetailsAttributes, deliverydetailsCreationAttributes } from "./deliverydetails";
import { deliverystatus_localization as _deliverystatus_localization } from "./deliverystatus_localization";
import type { deliverystatus_localizationAttributes, deliverystatus_localizationCreationAttributes } from "./deliverystatus_localization";
import { deliverytype as _deliverytype } from "./deliverytype";
import type { deliverytypeAttributes, deliverytypeCreationAttributes } from "./deliverytype";
import { localization as _localization } from "./localization";
import type { localizationAttributes, localizationCreationAttributes } from "./localization";
import { orderproduct as _orderproduct } from "./orderproduct";
import type { orderproductAttributes, orderproductCreationAttributes } from "./orderproduct";
import { orders as _orders } from "./orders";
import type { ordersAttributes, ordersCreationAttributes } from "./orders";
import { product as _product } from "./product";
import type { productAttributes, productCreationAttributes } from "./product";
import { product_localization as _product_localization } from "./product_localization";
import type { product_localizationAttributes, product_localizationCreationAttributes } from "./product_localization";
import { productcommentreactions as _productcommentreactions } from "./productcommentreactions";
import type { productcommentreactionsAttributes, productcommentreactionsCreationAttributes } from "./productcommentreactions";
import { productcomments as _productcomments } from "./productcomments";
import type { productcommentsAttributes, productcommentsCreationAttributes } from "./productcomments";
import { productdescription as _productdescription } from "./productdescription";
import type { productdescriptionAttributes, productdescriptionCreationAttributes } from "./productdescription";
import { productgroup as _productgroup } from "./productgroup";
import type { productgroupAttributes, productgroupCreationAttributes } from "./productgroup";
import { productgroup_localization as _productgroup_localization } from "./productgroup_localization";
import type { productgroup_localizationAttributes, productgroup_localizationCreationAttributes } from "./productgroup_localization";
import { productgroupmembership as _productgroupmembership } from "./productgroupmembership";
import type { productgroupmembershipAttributes, productgroupmembershipCreationAttributes } from "./productgroupmembership";
import { productimages as _productimages } from "./productimages";
import type { productimagesAttributes, productimagesCreationAttributes } from "./productimages";
import { productprice as _productprice } from "./productprice";
import type { productpriceAttributes, productpriceCreationAttributes } from "./productprice";
import { productproperty as _productproperty } from "./productproperty";
import type { productpropertyAttributes, productpropertyCreationAttributes } from "./productproperty";
import { productproperty_localization as _productproperty_localization } from "./productproperty_localization";
import type { productproperty_localizationAttributes, productproperty_localizationCreationAttributes } from "./productproperty_localization";
import { productpropertyvalue_localization as _productpropertyvalue_localization } from "./productpropertyvalue_localization";
import type { productpropertyvalue_localizationAttributes, productpropertyvalue_localizationCreationAttributes } from "./productpropertyvalue_localization";
import { sellers as _sellers } from "./sellers";
import type { sellersAttributes, sellersCreationAttributes } from "./sellers";
import { transactiondetails as _transactiondetails } from "./transactiondetails";
import type { transactiondetailsAttributes, transactiondetailsCreationAttributes } from "./transactiondetails";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _address as address,
  _deliverydetails as deliverydetails,
  _deliverystatus_localization as deliverystatus_localization,
  _deliverytype as deliverytype,
  _localization as localization,
  _orderproduct as orderproduct,
  _orders as orders,
  _product as product,
  _product_localization as product_localization,
  _productcommentreactions as productcommentreactions,
  _productcomments as productcomments,
  _productdescription as productdescription,
  _productgroup as productgroup,
  _productgroup_localization as productgroup_localization,
  _productgroupmembership as productgroupmembership,
  _productimages as productimages,
  _productprice as productprice,
  _productproperty as productproperty,
  _productproperty_localization as productproperty_localization,
  _productpropertyvalue_localization as productpropertyvalue_localization,
  _sellers as sellers,
  _transactiondetails as transactiondetails,
  _users as users,
};

export type {
  addressAttributes,
  addressCreationAttributes,
  deliverydetailsAttributes,
  deliverydetailsCreationAttributes,
  deliverystatus_localizationAttributes,
  deliverystatus_localizationCreationAttributes,
  deliverytypeAttributes,
  deliverytypeCreationAttributes,
  localizationAttributes,
  localizationCreationAttributes,
  orderproductAttributes,
  orderproductCreationAttributes,
  ordersAttributes,
  ordersCreationAttributes,
  productAttributes,
  productCreationAttributes,
  product_localizationAttributes,
  product_localizationCreationAttributes,
  productcommentreactionsAttributes,
  productcommentreactionsCreationAttributes,
  productcommentsAttributes,
  productcommentsCreationAttributes,
  productdescriptionAttributes,
  productdescriptionCreationAttributes,
  productgroupAttributes,
  productgroupCreationAttributes,
  productgroup_localizationAttributes,
  productgroup_localizationCreationAttributes,
  productgroupmembershipAttributes,
  productgroupmembershipCreationAttributes,
  productimagesAttributes,
  productimagesCreationAttributes,
  productpriceAttributes,
  productpriceCreationAttributes,
  productpropertyAttributes,
  productpropertyCreationAttributes,
  productproperty_localizationAttributes,
  productproperty_localizationCreationAttributes,
  productpropertyvalue_localizationAttributes,
  productpropertyvalue_localizationCreationAttributes,
  sellersAttributes,
  sellersCreationAttributes,
  transactiondetailsAttributes,
  transactiondetailsCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const address = _address.initModel(sequelize);
  const deliverydetails = _deliverydetails.initModel(sequelize);
  const deliverystatus_localization = _deliverystatus_localization.initModel(sequelize);
  const deliverytype = _deliverytype.initModel(sequelize);
  const localization = _localization.initModel(sequelize);
  const orderproduct = _orderproduct.initModel(sequelize);
  const orders = _orders.initModel(sequelize);
  const product = _product.initModel(sequelize);
  const product_localization = _product_localization.initModel(sequelize);
  const productcommentreactions = _productcommentreactions.initModel(sequelize);
  const productcomments = _productcomments.initModel(sequelize);
  const productdescription = _productdescription.initModel(sequelize);
  const productgroup = _productgroup.initModel(sequelize);
  const productgroup_localization = _productgroup_localization.initModel(sequelize);
  const productgroupmembership = _productgroupmembership.initModel(sequelize);
  const productimages = _productimages.initModel(sequelize);
  const productprice = _productprice.initModel(sequelize);
  const productproperty = _productproperty.initModel(sequelize);
  const productproperty_localization = _productproperty_localization.initModel(sequelize);
  const productpropertyvalue_localization = _productpropertyvalue_localization.initModel(sequelize);
  const sellers = _sellers.initModel(sequelize);
  const transactiondetails = _transactiondetails.initModel(sequelize);
  const users = _users.initModel(sequelize);

  product_localization.belongsTo(product, { as: "Product", foreignKey: "ProductID"});
  product.hasMany(product_localization, { as: "product_localizations", foreignKey: "ProductID"});
  productgroupmembership.belongsTo(product, { as: "Product", foreignKey: "ProductID"});
  product.hasMany(productgroupmembership, { as: "productgroupmemberships", foreignKey: "ProductID"});
  productimages.belongsTo(product, { as: "Product", foreignKey: "ProductID"});
  product.hasMany(productimages, { as: "productimages", foreignKey: "ProductID"});
  productprice.belongsTo(product, { as: "Product", foreignKey: "ProductID"});
  product.hasMany(productprice, { as: "productprices", foreignKey: "ProductID"});
  productproperty.belongsTo(product, { as: "Product", foreignKey: "ProductID"});
  product.hasMany(productproperty, { as: "productproperties", foreignKey: "ProductID"});
  productgroup_localization.belongsTo(productgroup, { as: "ProductGroup", foreignKey: "ProductGroupID"});
  productgroup.hasMany(productgroup_localization, { as: "productgroup_localizations", foreignKey: "ProductGroupID"});
  productgroupmembership.belongsTo(productgroup, { as: "ProductGroup", foreignKey: "ProductGroupID"});
  productgroup.hasMany(productgroupmembership, { as: "productgroupmemberships", foreignKey: "ProductGroupID"});
  productproperty_localization.belongsTo(productproperty, { as: "ProductProperty", foreignKey: "ProductPropertyID"});
  productproperty.hasMany(productproperty_localization, { as: "productproperty_localizations", foreignKey: "ProductPropertyID"});
  productpropertyvalue_localization.belongsTo(productproperty, { as: "ProductProperty", foreignKey: "ProductPropertyID"});
  productproperty.hasMany(productpropertyvalue_localization, { as: "productpropertyvalue_localizations", foreignKey: "ProductPropertyID"});

  return {
    address: address,
    deliverydetails: deliverydetails,
    deliverystatus_localization: deliverystatus_localization,
    deliverytype: deliverytype,
    localization: localization,
    orderproduct: orderproduct,
    orders: orders,
    product: product,
    product_localization: product_localization,
    productcommentreactions: productcommentreactions,
    productcomments: productcomments,
    productdescription: productdescription,
    productgroup: productgroup,
    productgroup_localization: productgroup_localization,
    productgroupmembership: productgroupmembership,
    productimages: productimages,
    productprice: productprice,
    productproperty: productproperty,
    productproperty_localization: productproperty_localization,
    productpropertyvalue_localization: productpropertyvalue_localization,
    sellers: sellers,
    transactiondetails: transactiondetails,
    users: users,
  };
}
