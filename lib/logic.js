/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {bridge.Trade} tx The transfer transaction instance.
 * @transaction
 */
async function tradeToken(trade) {  // eslint-disable-line no-unused-vars

    
    // set the new owner of the token
    trade.token.owner = trade.newOwner;
    const assetRegistry = await getAssetRegistry('bridge.Token');

    // emit a notification that a transfer has occurred
    const tradeNotification = getFactory().newEvent('bridge', 'TradeNotification');
    tradeNotification.token = trade.token;
    emit(tradeNotification);

    // persist the state of the commodity
    await assetRegistry.update(trade.token);
}

async function issueToken(issue) {  // eslint-disable-line no-unused-vars

    
    // set the new owner of the token
    issue.token.owner = issue.owner;
    const assetRegistry = await getAssetRegistry('bridge.token');

    // emit a notification that a transfer has occurred
    const transferNotification = getFactory().newEvent('bridge', 'TransferNotification');
    transferNotification.token = transfer.token;
    emit(transferNotification);

    // persist the state of the commodity
    await assetRegistry.update(transfer.token);
}

