import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomeThird from './Components/Welcome/WelcomeThird'
import WelcomeFirst from './Components/Welcome/WelcomeFirst'
import WelcomeSecond from './Components/Welcome/WelcomeSecond'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import FirstPage from './Components/FirstPage/FirstPage.jsx'
import { ForgetPassword } from './Components/ForgetPassword/ForgetPassword.jsx'
import { ForgetPasswordSecond } from './Components/ForgetPassword/ForgetPasswordSecond'
import Homepage from './Components/HomePage/HomePage'
import Newrecord from "./Components/NestedRouter/NewRecord/Newrecord"
import Account from "./Components/NestedRouter/Account/Account"
import History from "./Components/NestedRouter/History/History"
import Suggestion from "./Components/NestedRouter/Suggestion/Suggestion"
import Language from "./Components/NestedRouter/Language/Language"
import Result from './Components/NestedRouter/Result/Result.jsx'
import UpdateUser from './Components/NestedRouter/UpdateUser/UpdateUser'
import ThankYou from './Components/ThankYou/ThankYou'
import AboutUs from './Components/NestedRouter/AboutUs/AboutUs.jsx'
import Week from './Components/NestedRouter/History/Week.jsx'
import Day from './Components/NestedRouter/History/Day.jsx'
import RealMonth from './Components/NestedRouter/History/RealMonth.jsx'
import Month from './Components/NestedRouter/History/Month.jsx'
import Month2 from "./Components/NestedRouter/History/Month2.jsx"
import Month3 from "./Components/NestedRouter/History/Month3.jsx"
import Month1 from './Components/NestedRouter/History/Month1.jsx'
import ResetPassword from './Components/ForgetPassword/ResetPassword.jsx'
import { useEffect } from 'react'
import ResetSendEmail from './Components/ResetSendEmail/ResetSendEmail.jsx'
import ProtectedRouter from './Components/ProtectedRouter/ProtectedRouter.jsx'
function App() {
  useEffect(() => {
    const token = localStorage.getItem('Token');
    if (token) {
      router.navigate('/homepage', { replace: true });
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeFirst />
    },
    {
      path: "/resetPassword",
      element: <ResetPassword />,
    },
    {
      path: "/resetSendEmail",
      element: <ResetSendEmail />,
    },
    {
      path: "/welcomesecond",
      element: <WelcomeSecond />,
    },
    {
      path: "/homepage",
      element:<ProtectedRouter><Homepage /></ProtectedRouter> ,
      children: [
        {
          path: "",
          element:<ProtectedRouter> <Newrecord /></ProtectedRouter>,
        },
        {
          path: "forgetpasswordsecond",
          element:<ProtectedRouter><ForgetPasswordSecond /></ProtectedRouter> ,
        },
        {
          path: "aboutus",
          element:<ProtectedRouter><AboutUs /></ProtectedRouter> ,
        },
        {
          path: "account",
          element:<ProtectedRouter> <Account /></ProtectedRouter>,
        },
        {
          path: "history",
          element:<ProtectedRouter> <History /></ProtectedRouter>,
          children: [
            {
              path: "",
              element:<ProtectedRouter><Day /></ProtectedRouter> ,
            },
            {
              path: "week",
              element: <ProtectedRouter><Week /></ProtectedRouter>,
            },
            {
              path: "month",
              element:<ProtectedRouter> <RealMonth /></ProtectedRouter>,
            },
            {
              path: "year",
              element:<ProtectedRouter> <Month /></ProtectedRouter>,
              children: [
                {
                  path: "",
                  element: <ProtectedRouter><Month1 /></ProtectedRouter>,
                },
                {
                  path: "month2",
                  element:<ProtectedRouter><Month2 /></ProtectedRouter> ,
                },
                {
                  path: "month3",
                  element: <ProtectedRouter><Month3 /></ProtectedRouter>,
                },
              ]
            },
          ]
        },
        {
          path: "suggestion",
          element:<ProtectedRouter> <Suggestion /></ProtectedRouter>,
        },
        {
          path: "language",
          element: <Language />,
        },
        {
          path: "result",
          element:<ProtectedRouter> <Result /></ProtectedRouter>,
        },
      ],
    },
    {
      path: "/update",
      element: <ProtectedRouter><UpdateUser /></ProtectedRouter>,
    },
    {
      path: "/thanks",
      element:<ProtectedRouter> <ThankYou /></ProtectedRouter>,
    },
    {
      path: "/welcomethird",
      element: <WelcomeThird />,
    },
    {
      path: "/firstpage",
      element: <FirstPage />,
    },
    {
      path: "/forgetpassword",
      element: <ForgetPassword />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
