import React, { PureComponent } from "react";
import { colors } from "../../assets/styles/global";
import { Text, View, StatusBar, InteractionManager } from "react-native";
import {
  Button,
  Icon,
  Container,
  Header,
  Left,
  Body,
  Right,
  Title
} from "native-base";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth";
import FooterTab from "../../assets/Components/FooterTab/FooterTab";

class Home extends PureComponent {
  static navigationOptions = {
    headerLeft: (
      <View>
        <Button transparent>
          <Icon name="menu" type="Entypo" />
        </Button>
      </View>
    )
  };
  state = {
    ready: false
  };

  componentDidMount() {
    this.props.navigation.addListener("willFocus", () => {
      StatusBar.setBackgroundColor(colors.BLUE_V1);
    });
    InteractionManager.runAfterInteractions(() => {
      this.setState({ ready: true });
    });
  }

  signOutBtn = () => {
    // const { uid } = this.props.user;
    // this.props.logout({ uid });
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <Container>
        <FooterTab />
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userData.data.data
});

const mapDispatchToProps = dispatch => ({
  logout: usd => dispatch(signOut(usd))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);