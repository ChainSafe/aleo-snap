import {Menu} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {SelectInfo} from "rc-menu/lib/interface";

const items = [
  {
    label: "Account",
    key: '/account'
  },
  {
    label: "Transfer",
    key: '/transfer'
  }
];

export function NavigationMenu(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const onSelect = (info: SelectInfo) => {
    navigate(info.key);
  };

  return <Menu mode="horizontal" activeKey={location.pathname} items={items} onSelect={onSelect} />;
}
