import React, { Component } from 'react';
import {  Animated, Text, View } from 'react-native';
import CameraRollDemo from './cameraRollDemo';
import { StackNavigator } from 'react-navigation';

type Props = {}

const StackNavigatorRoute = StackNavigator({
    ImageBrowser: { screen : CameraRollDemo }
})