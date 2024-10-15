import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import { ActivityIndicator, ListRenderItem, View } from 'react-native';
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { getColorWithOpacity, hexToRGB } from '_theme/colors.ts';
import { ColorType } from '_theme/variables';
import { moderateScale } from '_utils/dynamic.utils';

interface DataListContainerProps {
  dotsContainer?: React.ReactNode;
  ItemRender?: ListRenderItem<any> | null | undefined;
  refreshData?: () => void;
  onRefetch?: (value: boolean) => void;
  isLoading?: boolean;
  reFetch?: boolean;
  scrollEnabled?: boolean;
  initIndex?: number;
  gap?: number;
  hideBG?: boolean;
  data: any[];
  setCopyLocalList?: React.Dispatch<any>;
}

export type DataListContainerRefMethods = {
  updatePaginatedList: (data: any, key: string) => void;
};

const ItemSeparator = (gap: number | undefined) => {
  return <View style={{ height: 1, paddingTop: 12, gap }} />;
};

const ListSkeleton2 = () => (
  <SkeletonPlaceholder borderRadius={7}>
    <SkeletonPlaceholder.Item borderRadius={7} gap={10}>
      <SkeletonPlaceholder.Item width={'100%'} height={150} />
      <SkeletonPlaceholder.Item width={'100%'} height={150} />
      <SkeletonPlaceholder.Item width={'100%'} height={150} />
      <SkeletonPlaceholder.Item width={'100%'} height={150} />
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

export const ListSkeleton = () => (
  <SkeletonPlaceholder borderRadius={7}>
    <SkeletonPlaceholder.Item borderRadius={7} gap={10}>
      {[...Array(5)].map((_, index) => (
        <SkeletonPlaceholder.Item key={index} width={'100%'} height={150} />
      ))}
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

const DataListContainer = forwardRef<
  DataListContainerRefMethods,
  DataListContainerProps
>(
  ({
    dotsContainer,
    isLoading = false,
    ItemRender,
    refreshData,
    reFetch,
    onRefetch,
    scrollEnabled = true,
    gap,
    data,
  }) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isListLoading, setIsListLoading] = useState(false);

    useEffect(() => {
      if (reFetch) {
        onRefetch && onRefetch(false);
      }
    }, [reFetch]);

    const handleRefresh = useCallback(async () => {
      setIsRefreshing(true);
      if (refreshData) {
        refreshData();
      }
      setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
    }, [refreshData]);

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;
      if (isLoading) {
        setIsListLoading(true);
      } else {
        timeout = setTimeout(() => {
          setIsListLoading(false);
        }, 2000);
      }
      return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
      <View
        style={{
          backgroundColor: 'white',
        }}>
        {!!dotsContainer && dotsContainer}
        <FlatList
          keyExtractor={(item, index) => index + Math.random() + ''}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={isListLoading ? <ListSkeleton /> : null}
          disableVirtualization
          contentContainerStyle={{
            paddingBottom: moderateScale(50),
            paddingTop: moderateScale(10),
          }}
          scrollEnabled={scrollEnabled}
          data={data}
          refreshControl={
            scrollEnabled ? (
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            ) : undefined
          }
          ItemSeparatorComponent={() => ItemSeparator(gap)}
          ListFooterComponent={
            <View
              style={{
                height: 200,
                justifyContent: 'flex-start',
                paddingTop: 16,
              }}>
              {isListLoading && data?.length > 0 && (
                <ActivityIndicator size={'large'} color={ColorType?.primary} />
              )}
            </View>
          }
          onEndReachedThreshold={0.4}
          renderItem={ItemRender}
        />
      </View>
    );
  },
);

export default DataListContainer;
