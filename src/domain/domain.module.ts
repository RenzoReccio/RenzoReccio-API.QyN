import { Module, Provider } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { TypeormModule } from 'src/data/typeorm/typeorm.module';
import { UtilsModule } from 'src/utils/utils.module';
import { LoginUseCase } from './usecase/auth/login/login.usecase';
import { SigInUseCase } from './usecase/auth/signin/signin.usecase';
import { ListCategoriesUseCase } from './usecase/category/listCategories/listCategories.usecase';
import { ListClientByIdUseCase } from './usecase/client/listClientById/listClientById.usecase';
import { ListClientsUseCase } from './usecase/client/listClients/listClients.usecase';
import { UpdateClientUseCase } from './usecase/client/updateClient/updateClient.usecase';
import { ListDriversUseCase } from './usecase/driver/listDrivers/listDrivers.usecase';
import { CreateClientOrderUseCase } from './usecase/order/createClientOrder/createClientOrder.usecase';
import { ListOrderByIdUseCase } from './usecase/order/listOrderById/listOrderById.usecase';
import { ListOrdersUseCase } from './usecase/order/listOrders/listOrders.usecase';
import { ListOrderStatusUseCase } from './usecase/order/listOrderStatus/listOrderStatus.usecase';
import { ListOrdersToAssignUseCase } from './usecase/order/listOrdersToAssign/listOrdersToAssign.usecase';
import { UpdateOrderUseCase } from './usecase/order/updateOrder/updateOrder.usecase';
import { CreateProductUseCase } from './usecase/product/createProduct/createProduct.usecase';
import { ListCatalogUseCase } from './usecase/product/listCatalog/listCatalog.usecase';
import { ListMovementsUseCase } from './usecase/product/listMovements/listMovements.usecase';
import { ListProductByIdUseCase } from './usecase/product/listProductById/listProductById.usecase';
import { ListProductsUseCase } from './usecase/product/listProducts/listProducts.usecase';
import { UpdateProductUseCase } from './usecase/product/updateProduct/updateProduct.usecase';
import { CreatePurchaseOrderUseCase } from './usecase/purchaseOrder/createPurchaseOrder/createPurchaseOrder.usecase';
import { ListPurchaseOrderByIdUseCase } from './usecase/purchaseOrder/listPurchaseOrderById/listPurchaseOrderById.usecase';
import { ListPurchaseOrdersUseCase } from './usecase/purchaseOrder/listPurchaseOrders/listPurchaseOrders.usecase';
import { ListPurchaseOrderStatusUseCase } from './usecase/purchaseOrder/listPurchaseOrderStatus/listPurchaseOrderStatus.usecase';
import { UpdatePurchaseOrderUseCase } from './usecase/purchaseOrder/updatePurchaseOrder/updatePurchaseOrder.usecase';
import { CreateSupplierUseCase } from './usecase/supplier/createSupplier/createSupplier.usecase';
import { ListSupplierByIdUseCase } from './usecase/supplier/listSupplierById/listSupplierById.usecase';
import { ListSuppliersUseCase } from './usecase/supplier/listSuppliers/listSuppliers.usecase';
import { UpdateSupplierUseCase } from './usecase/supplier/updateSupplier/updateSupplier.usecase';
import { ListTypeDocumentUseCase } from './usecase/typeDocument/listTypeDocuments/listTypeDocuments.usecase';
import { ListTypeVehiclesUseCase } from './usecase/typeVehicle/listTypeVehicles/listTypeVehicles.usecase';
import { CreateVehicleUseCase } from './usecase/vehicle/createVehicle/createVehicle.usecase';
import { ListVehicleByIdUseCase } from './usecase/vehicle/listVehicleById/listVehicleById.usecase';
import { ListVehiclesUseCase } from './usecase/vehicle/listVehicles/listVehicles.usecase';
import { UpdateVehicleUseCase } from './usecase/vehicle/updateVehicle/updateVehicle.usecase';


const typeOrmProviders = (): Provider[] => {
  return Reflect.getMetadata('providers', TypeormModule).map((item: Function) => { return { provide: item.name.replace('Service', 'Repository'), useClass: item } })
}

const AuthUseCases = [
  LoginUseCase,
  SigInUseCase
]
const OrderUseCases = [
  ListOrdersUseCase,
  UpdateOrderUseCase,
  ListOrderStatusUseCase,
  ListOrderByIdUseCase,
  CreateClientOrderUseCase,
  ListOrdersToAssignUseCase,
]

const ProductUseCases = [
  ListCatalogUseCase,
  CreateProductUseCase,
  UpdateProductUseCase,
  ListProductByIdUseCase,
  ListProductsUseCase,
  ListMovementsUseCase
]

const VehiclesUseCases = [
  ListVehiclesUseCase,
  ListVehicleByIdUseCase,
  CreateVehicleUseCase,
  UpdateVehicleUseCase
]

const DriverUseCases = [
  ListDriversUseCase
]

const TypeVehicleUseCases = [
  ListTypeVehiclesUseCase
]

const CategoryUseCases = [
  ListCategoriesUseCase
]

const ClientUseCases = [
  ListClientByIdUseCase,
  ListClientsUseCase,
  UpdateClientUseCase
]

const TypeDocumentUseCase = [
  ListTypeDocumentUseCase
]

const PurchaseOrderUseCase = [
  ListPurchaseOrderByIdUseCase,
  ListPurchaseOrdersUseCase,
  CreatePurchaseOrderUseCase,
  UpdatePurchaseOrderUseCase,
  ListPurchaseOrderStatusUseCase,
]

const SupplierUseCases = [
  ListSuppliersUseCase,
  ListSupplierByIdUseCase,
  CreateSupplierUseCase,
  UpdateSupplierUseCase
]
@Module({
  imports: [DataModule, UtilsModule],
  exports: [
    ...OrderUseCases,
    ...ProductUseCases,
    ...AuthUseCases,
    ...VehiclesUseCases,
    ...DriverUseCases,
    ...TypeVehicleUseCases,
    ...CategoryUseCases,
    ...ClientUseCases,
    ...TypeDocumentUseCase,
    ...PurchaseOrderUseCase,
    ...SupplierUseCases
  ],
  providers: [
    ...typeOrmProviders(),
    ...OrderUseCases,
    ...ProductUseCases,
    ...AuthUseCases,
    ...VehiclesUseCases,
    ...DriverUseCases,
    ...TypeVehicleUseCases,
    ...CategoryUseCases,
    ...ClientUseCases,
    ...TypeDocumentUseCase,
    ...PurchaseOrderUseCase,
    ...SupplierUseCases
  ]
})
export class DomainModule { }
