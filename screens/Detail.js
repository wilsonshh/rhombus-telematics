import React, { Component } from 'react';
import { TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import { Button, Block, Icon, Text, Input } from '../components';

/* Constants =============================================================== */

const { height } = Dimensions.get('window');

/* Detail =============================================================== */
class Detail extends Component {
  constructor() {
    super();

    // Disable text entry
    this.state = { TextInputDisableStatus: true }
  }

  // Set navigation title and back button
  static navigationOptions = ({ navigation }) => ({
    headerLeftContainerStyle: {
      paddingLeft: 24
    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Icon back /></TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle><Text h4>Detail</Text></Block>
    )
  })

  // Show detail view
  render() {
    const { navigation } = this.props;

    // Object data passed from the Overview
    const { params } = this.props.navigation.state;

    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>

        <KeyboardAvoidingView
          enabled
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={height * 0.2}
        >
          <Block center middle>

            <Block flex={2.5} center>

              <Block center style={{ marginTop: 4 }}>
                <Input
                  full
                  email
                  label="Name"
                  value={`${params.data.name}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Manufacturer"
                  value={`${params.data.manufacturer}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Cargo capacity"
                  value={`${params.data.cargo_capacity}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Consumeables"
                  value={`${params.data.consumables}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Cost in credits"
                  value={`${params.data.cost_in_credits}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Crew"
                  value={`${params.data.crew}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Length"
                  value={`${params.data.length}`}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  email
                  label="Max atomosphering speed"
                  value={`${params.data.max_atmosphering_speed}`}
                  style={{ marginBottom: 25 }}
                />

                {/* Go back */}
                <Button
                  full
                  style={{ marginBottom: 12 }}
                  onPress={() => navigation.navigate('Overview')}
                >
                  <Text button>SAVE AND CLOSE</Text>
                </Button>

              </Block>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

/* exports =============================================== */
export default Detail;
