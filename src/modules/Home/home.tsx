import * as React from 'react';

type MyProps = {
    name: string;
    count: number;
};

export class HomeComponent extends React.Component<MyProps, any> {
    props: MyProps;

    render() {
        return ( <h1>{this.props.name} {this.props.count}</h1>);
    }
}