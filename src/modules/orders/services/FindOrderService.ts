import { inject, injectable } from 'tsyringe'

import IProductsRepository from '@modules/products/repositories/IProductsRepository'
import AppError from '@shared/errors/AppError'
import Order from '../infra/typeorm/entities/Order'
import IOrdersRepository from '../repositories/IOrdersRepository'

interface IRequest {
  id: string
}

@injectable()
class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Order | undefined> {
    const order = await this.ordersRepository.findById(id)

    if (!order) {
      throw new AppError('Order not found')
    }

    return order
  }
}

export default FindOrderService
