import React from 'react';
import { View, Text } from 'react-native';

// Exercise 1: Create a function component named Welcome
const Welcome = () => {
    return (
        <View>
            <Text> </Text>
            <Text> </Text>
            <Text>
                Welcome to C346 - Mobile App Development
            </Text>
        </View>
    );
};

// Exercise 2: Create a class component named ModuleInfo
class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text> </Text>
                <Text>
                    These are my modules this semester:
                </Text>
            </View>
        );
    }
}

// Exercise 3: Modify Welcome to accept code and name props
const WelcomeWithProps = ({ code, name }) => {
    return (
        <View>
            <Text>
                Welcome to {code} - {name}
            </Text>
        </View>
    );
};

export default function App() {
    return (
        <View>
            {/* Exercise 1 */}
            <Welcome />

            {/* Exercise 2 */}
            <ModuleInfo />

            {/* Exercise 3 */}
            <WelcomeWithProps
                code="C346"
                name="Mobile App Development"
            />

            <WelcomeWithProps
                code="C381"
                name="IT Service Delivery"
            />

            <WelcomeWithProps
                code="C300"
                name="Project"
            />

            <WelcomeWithProps
                code="A002"
                name="Eating Well, Living Well"
            />

            <WelcomeWithProps
                code="E004"
                name="Unmanned Aircraft Operation"
            />
        </View>
    );
}

