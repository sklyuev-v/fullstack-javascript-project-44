#!/usr/bin/env node
import { rules, getRoundData } from '../src/games/brain-progression-logic.js';
import { runGame } from '../src/index.js';

runGame(rules, getRoundData);
