import { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import Tasklist from "./components/Tasklist/Tasklist";
import SettingModal from "./components/Setting/SettingModal";

import "./App.css";
import Backdrop from "./components/Setting/Backdrop";

const App = () => {
  const [showSettingModal, setShowSettingModal] = useState(false);

  const toggleModal = () => {
    setShowSettingModal(prev => !prev)
  }

  return (
    <Fragment>
      {showSettingModal && <Backdrop onClick={toggleModal}/>}
      {showSettingModal && <SettingModal onCancel={toggleModal}/>}
      <Header settingHandler={toggleModal}/>
      <Timer />
      <Tasklist />
    </Fragment>
  );
};

export default App;
