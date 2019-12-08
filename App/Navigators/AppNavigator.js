import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import RegisterUser from '../Containers/Register';
import SplashScreen from  '../Containers/SplashScreen'
import HomeScreen from '../Containers/MainScreen'
import CustomerInput from '../Containers/Customers/CustomerInput'
import CustomersList from '../Containers/Customers/CustomersList'
import CustomerView from '../Containers/Customers/CustomerView'
import ItemInput from '../Containers/Items/ItemInput'
import ItemView from '../Containers/Items/ItemView'
import TaxForm from '../Containers/Status/TaxForm'
import Preview from '../Containers/GenerateInvoice/Preview'
import AmountPaid from '../Containers/Status/AmountPaidForm'
import UserEdit from '../Containers/Update'
import SettingsScreen from '../Containers/SettingsScreen'
import AboutSection from '../Containers/About'
import WelcomeScreen from '../Containers/WelcomeScreen'
import ForgotPassword from '../Containers/ForgotPassword'
import ResetPassword from '../Containers/ResetPassword'
import VerifyResetToken from '../Containers/VerifyResetToken'
import ChangePassword from '../Containers/Update/ChangePassword'
import AddToCartSceen from '../Containers/Stock/AddToCart'
import StockItemView from '../Containers/Stock/StockItemView'
import AddToStockSceen from '../Containers/Stock/AddToStock'
import itemListScreen from '../Containers/Stock/ItemsList'
import ScanScreen from '../Containers/Stock/ScanScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: HomeScreen,
    Register: RegisterUser,
    CustomerInputForm: CustomerInput,
    CustomersList: CustomersList,
    CustomerInfo: CustomerView,
    AddItem: ItemInput,
    EditItem: ItemView,
    TaxInput: TaxForm,
    PreviewPdf: Preview,
    UserUpdate: UserEdit,
    PaidAmount: AmountPaid,
    Settings: SettingsScreen,
    About: AboutSection,
    Welcome: WelcomeScreen,
    Forgot: ForgotPassword,
    Reset: ResetPassword,
    VerifyToken: VerifyResetToken,
    UpdatePassword: ChangePassword,
    AddToCart: AddToCartSceen,
    AddToStock: AddToStockSceen,
    ItemsList: itemListScreen,
    Scan: ScanScreen,
    EditStock: StockItemView,

  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
