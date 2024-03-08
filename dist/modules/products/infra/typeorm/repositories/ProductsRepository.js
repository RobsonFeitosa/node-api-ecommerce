"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _typeorm2 = _interopRequireDefault(require("../../../../../shared/infra/typeorm"));
var _Product = _interopRequireDefault(require("../entities/Product"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function isEmpty(variable) {
  return variable === null || variable === undefined;
}
const relations = ['images', 'wish', 'product_data', 'attributes', 'time_discount', 'team'];
class ProductsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _typeorm2.default.getRepository(_Product.default);
  }
  async create(data) {
    const product = this.ormRepository.create(data);
    await this.ormRepository.save(product);
    return product;
  }
  async findByName(name) {
    const findProduct = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return findProduct;
  }
  async findByTimeDiscountId(id) {
    const findProduct = await this.ormRepository.findOne({
      where: {
        time_discount_id: id
      }
    });
    return findProduct;
  }
  async findEmphasis() {
    const findProduct = await this.ormRepository.findOne({
      where: {
        emphasis: true
      },
      relations
    });
    return findProduct;
  }
  async findProductsAndServicesAll(options) {
    const dates = await this.ormRepository.query(`select * from pd100_products, se100_service ORDER BY RANDOM()`);
    return [[], 0];
  }
  async findByTimeDiscountNull() {
    const products = await this.ormRepository.find({
      where: {
        time_discount_id: (0, _typeorm.IsNull)()
      }
    });
    return products;
  }
  async findAndCount(options, filter, order) {
    const hasFilter = Object.keys(filter).length > 0;
    console.log({
      filter
    });
    const where = [{}];
    if (filter.type) {
      where[0].type = filter.type;
    }
    if (filter.name) {
      where[0].name = (0, _typeorm.ILike)(`%${filter.name}%`);
    }
    if (filter.quantity) {
      where[0].product_data = {
        quantity: filter.quantity
      };
    }
    if (filter.weight) {
      where[0].product_data = {
        weight: filter.weight
      };
    }
    if (filter.userId) {
      where[0].wish = {
        user_id: filter.userId
      };
    }
    if (filter.categoryId) {
      where[0].categories = (0, _typeorm.ILike)(`%${filter.categoryId}%`);
    }
    if (filter.productIds) {
      const ids = JSON.parse(filter.productIds);
      where[0].id = (0, _typeorm.In)(ids);
    }
    if (filter.onlyDiscount) {
      where[0].time_discount_id = (0, _typeorm.Not)((0, _typeorm.IsNull)());
    }
    if (filter.onlyDiscount) {
      where[0].time_discount_id = (0, _typeorm.Not)((0, _typeorm.IsNull)());
    }
    if (!isEmpty(filter.priceMax) || !isEmpty(filter.priceMin)) {
      const price = (0, _typeorm.Between)(filter.priceMin, filter.priceMax);
      where[0].price = price;
    }
    const orders = {};
    if (orders) {
      orders.updated_at = 'DESC';
      orders.created_at = 'DESC';
      if (order.timeDiscountPriory) {
        orders.time_discount_id = 'ASC';
      }
      if (order.alphabeticalASC) {
        orders.name = 'ASC';
      }
      if (order.alphabeticalDESC) {
        orders.name = 'DESC';
      }
      if (order.highPrice) {
        orders.price = 'DESC';
      }
      if (order.lowPrice) {
        orders.price = 'ASC';
      }
      if (order.old) {
        orders.price = 'ASC';
      }
    }
    const products = await this.ormRepository.findAndCount({
      take: options.limit,
      skip: (options.page - 1) * options.limit,
      relations,
      order: orders,
      ...(hasFilter && {
        where
      })
    });
    return products;
  }
  async findById(id) {
    const product = await this.ormRepository.findOne({
      where: {
        id
      },
      relations,
      order: {
        updated_at: 'DESC',
        created_at: 'DESC'
      },
      withDeleted: true
    });
    return product;
  }
  async findBySlugAndId(slug, id) {
    const product = await this.ormRepository.findOne({
      where: {
        slug,
        id
      },
      relations,
      order: {
        attributes: {
          variations: {
            created_at: 'ASC'
          }
        }
      },
      withDeleted: true
    });
    return product;
  }
  async findAllById(products) {
    const findProduct = await this.ormRepository.findByIds(products);
    return findProduct;
  }
  async All() {
    const products = await this.ormRepository.createQueryBuilder('products').leftJoinAndSelect('products.images', 'images').getMany();
    return products;
  }
  async updateQuantity(products) {
    const updatedProducts = await this.ormRepository.save(products);
    return updatedProducts;
  }
  async delete(id) {
    const product = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    if (product) {
      this.ormRepository.remove(product);
    }
  }
  async save(product) {
    return this.ormRepository.save(product);
  }
}
var _default = exports.default = ProductsRepository;