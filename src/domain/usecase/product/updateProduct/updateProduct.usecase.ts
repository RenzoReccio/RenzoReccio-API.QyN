import { Inject } from "@nestjs/common";
import { ResourceNotFound } from "src/domain/error/resourceNotFound.exception";
import { ValidationError } from "src/domain/error/validation.error";
import { ProductModel } from "src/domain/model/product.model";
import { CategoryRepository } from "src/domain/repository/category.repository";
import { ProductRepository } from "src/domain/repository/product.repository";
import { BaseUseCase } from "../../base/base.usecase";
import { UpdateProductDto } from "./updateProduct.dto";
import { UpdateProductResponse } from "./updateProduct.response";

export class UpdateProductUseCase implements BaseUseCase<UpdateProductDto, UpdateProductResponse>{


  constructor(
    @Inject('ProductRepository') private _productRepository: ProductRepository,
    @Inject('CategoryRepository') private _categoryRepository: CategoryRepository,
  ) { }

  async get(dto?: UpdateProductDto): Promise<UpdateProductResponse> {

    let productExist = await this._productRepository.findOne(dto.id);
    if (!productExist) throw new ResourceNotFound('El producto indicado no se encuentra registrado');

    if (dto.minStock >= dto.maxStock) throw new ValidationError('El stock minimo no puede ser mayor al stock maximo.')

    let category = await this._categoryRepository.findOne(dto.categoryId);
    if (!category) throw new ResourceNotFound('La categoria no se encuentra registrada');
    
    let productUpdate = new ProductModel(dto.id,
      dto.code, dto.name, dto.salesPrice, dto.purchasePrice,
      category, dto.minStock, dto.maxStock, undefined,
      dto.showInCatalog, dto.urlImage
    )

    productUpdate = await this._productRepository.update(productUpdate)
    return new UpdateProductResponse(productUpdate.id);
  }
}