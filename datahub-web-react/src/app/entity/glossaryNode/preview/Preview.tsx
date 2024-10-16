import React from 'react';
import { FolderOutlined } from '@ant-design/icons';
import { EntityType, Owner, ParentNodesResult, GlobalTags } from '../../../../types.generated';
import DefaultPreviewCard from '../../../preview/DefaultPreviewCard';
import { useEntityRegistry } from '../../../useEntityRegistry';

export const Preview = ({
    urn,
    name,
    description,
    owners,
    parentNodes,
    globalTags,
}: {
    urn: string;
    name: string;
    description?: string | null;
    globalTags?: GlobalTags | null;
    owners?: Array<Owner> | null;
    parentNodes?: ParentNodesResult | null;
}): JSX.Element => {
    const entityRegistry = useEntityRegistry();
    return (
        <DefaultPreviewCard
            url={entityRegistry.getEntityUrl(EntityType.GlossaryNode, urn)}
            name={name || ''}
            urn={urn}
            description={description || ''}
            owners={owners}
	    tags={globalTags || undefined}
            logoComponent={<FolderOutlined style={{ fontSize: '20px' }} />}
            type={entityRegistry.getEntityName(EntityType.GlossaryNode)}
            parentEntities={parentNodes?.nodes}
        />
    );
};
