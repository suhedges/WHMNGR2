import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, ViewProps } from 'react-native';
import { Card } from './Card';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { colors } from '@/constants/colors';

interface ExpandableCardProps extends ViewProps {
  title: string;
  initiallyExpanded?: boolean;
  children: React.ReactNode;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  initiallyExpanded = false,
  children,
  style,
  ...props
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  return (
    <Card style={style} {...props}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
        accessibilityRole="button"
      >
        <Text style={styles.title}>{title}</Text>
        {expanded ? (
          <ChevronUp size={16} color={colors.text} />
        ) : (
          <ChevronDown size={16} color={colors.text} />
        )}
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    marginTop: 12,
  },
});