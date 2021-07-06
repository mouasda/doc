/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class ArchitectContract extends Contract {

    async documentExists(ctx, documentId) {
        const buffer = await ctx.stub.getState(documentId);
        return (!!buffer && buffer.length > 0);
    }

    async createDocument(ctx, documentID, value) {
        const exists = await this.architectExists(ctx, documentId);
        if (exists) {
            throw new Error(`The document ${documentId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(architectId, buffer);
    }

  

    async updateDocument(ctx, documentId, newValue) {
        const exists = await this.documentExists(ctx, documentId);
        if (!exists) {
            throw new Error(`The document ${architectId} does not exist`);
        }
        const asset = { value: newValue };
        if(newValue.documentid.documentNumber - documentId.documentNumber ==1)
        {
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(documentId, buffer);
        }
    }

    async endorseDocument(ctx, documentId) {
        const exists = await this.documentExists(ctx, documentId);
        if (!exists) {
            throw new Error(`The document ${documentId} does not exist`);
        }
        await ctx.stub.putState(documentId, value);
    }

    async commentDocument(ctx, documentId) {
        const exists = await this.documentExists(ctx, documentId);
        if (!exists) {
            throw new Error(`The document ${documentId} does not exist`);
        }
        await ctx.stub.putState(documentId, value);
    }
}

module.exports = ArchitectContract;
